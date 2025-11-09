import {
  PaperFormat,
  PDFOptions,
  ScreenshotOptions,
  Viewport,
} from "puppeteer-core";

export type HtmlToPdfRequest = {
  type: "html-to-pdf";
  html: string;
  options?: PDFOptions;
};

export type UrlToPdfRequest = {
  type: "url-to-pdf";
  url: string;
  options?: PDFOptions;
};

export type HtmlToImageRequest = {
  type: "html-to-image";
  html: string;
  options?: ScreenshotOptions;
  viewport?: Viewport;
};

export type RequestBody =
  | HtmlToPdfRequest
  | UrlToPdfRequest
  | HtmlToImageRequest;
