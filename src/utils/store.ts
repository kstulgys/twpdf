import { proxy, ref, useSnapshot } from "valtio";
import { usecase } from "./templates/templates";
import DOMPurify from "dompurify";
import { generatePdf } from "~/server";
import { RequestBody } from "./types";
import { PDFOptions, ScreenshotOptions } from "puppeteer-core";

type FileProps = {
  type: "image" | "doc" | "web";
  output: "pdf" | "jpeg" | "png";
  width: number;
  height: number;
  html: string;
  style: string;
  format?: string;
  printBackground?: boolean;
  margin?: Record<string, string | number>;
  landscape?: boolean;
  isTailwindHtml?: boolean;
  deviceScaleFactor?: number;
  url: string;
};

const store = proxy({
  mode: "code" as "code" | "preview",
  isDownloading: false,
  html: ref({ current: usecase[0].template.trim() }),
  apiProps: {
    type: "doc" as "doc" | "image" | "web",
    output: "pdf" as "pdf" | "jpeg" | "png",
    width: 210,
    height: 0,
    printBackground: true,
    style: "",
    format: "a4",
    margin: {
      bottom: "0cm",
      top: "0cm",
      left: "0cm",
      right: "0cm",
    },
    landscape: false,
    isTailwindHtml: true,
    deviceScaleFactor: 1,
    url: "https://www.producthunt.com/posts/tailwindpdf?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tailwindpdf",
    dpi: 300,
  },
  // @ts-ignore
  onApiPropChange: (key, value) => {
    // @ts-ignore
    store.apiProps[key] = value;
  },
  usecase: usecase[0],
  // @ts-ignore
  onChangeUsecase: (usecase) => {
    store.usecase = usecase;
    store.html.current = usecase.template.trim();
  },
  // @ts-ignore
  onModeToggle: (e) => {
    store.mode = e.target.name;
  },
  updateHtml: (html: string) => {
    store.html.current = html;
  },
  onDownload: async () => {
    if (store.isDownloading) return;
    try {
      store.isDownloading = true;
      const html = DOMPurify.sanitize(store.html.current.trim());
      const apiProps = JSON.parse(JSON.stringify(store.apiProps)) as FileProps;
      const pdfOptions: PDFOptions = {
        format: apiProps.format as "a4",
        landscape: apiProps.landscape,
        preferCSSPageSize: true,
      };

      const imageOptions: ScreenshotOptions = {
        type: apiProps.output as "jpeg" | "png",
        fullPage: true,
      };

      if (apiProps.type === "doc") {
        await downloadPdf({
          html,
          type: "html-to-pdf",
          options: pdfOptions,
        });
        return;
      }

      if (apiProps.type === "image") {
        await downloadPdf({
          html,
          type: "html-to-image",
          options: imageOptions,
          viewport: {
            width: apiProps.width,
            height: apiProps.height,
            deviceScaleFactor: apiProps.deviceScaleFactor,
          },
        });
        return;
      }

      if (apiProps.type === "web") {
        await downloadPdf({
          url: apiProps.url,
          type: "url-to-pdf",
          options: pdfOptions,
        });
        return;
      }
    } catch (e) {
      console.log(e);
    } finally {
      store.isDownloading = false;
    }
  },
});

export function useStore() {
  return useSnapshot(store);
}

function base64ToBlob(
  base64: string,
  mimeType: "application/pdf" | "image/jpeg" | "image/png"
): Blob {
  return new Blob([Uint8Array.from(atob(base64), (c) => c.charCodeAt(0))], {
    type: mimeType,
  });
}

async function downloadPdf(props: RequestBody) {
  const base64Pdf = await generatePdf(props);
  // Convert base64 to blob and download
  const blob = base64ToBlob(
    base64Pdf,
    props.type === "html-to-image"
      ? `image/${props.options?.type as "jpeg" | "png"}`
      : "application/pdf"
  );
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${Date.now()}.${
    props.type === "html-to-image" ? props.options?.type : "pdf"
  }`;
  link.click();
  URL.revokeObjectURL(url);
}
