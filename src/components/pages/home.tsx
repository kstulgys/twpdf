"use client";

import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  HStack,
  Link,
  RadioGroup,
  Input,
  SimpleGrid,
  VStack,
  createIcon,
  Menu,
  InputGroup,
  Image,
  AspectRatio,
  NativeSelect,
  Portal,
  Dialog,
  Field,
  Fieldset,
  Textarea,
} from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import { useStore } from "../../utils/store";
import { usecase } from "../../utils/templates/templates";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { sendFeedback } from "~/server";
// import { useMutation } from "convex/react";
// import { api } from "../../../convex/_generated/api";

const LogoIcon = createIcon({
  viewBox: "0 0 40 40",
  displayName: "LogoIcon",
  path: (
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m5.355 5.314 13.388.128 2.006 5.555-.17 17.893-2.06-.02-13.645-.13.481-23.426Z"
        fill="#ECFDF5"
      />
      <path
        d="m34.427 34.687-13.387-.128-7.243-23.5 20.854.2-.224 23.428Z"
        fill="#059669"
      />
      <path
        d="m18.743 5.443 2.079 5.684-7.025-.067 4.946-5.617Z"
        fill="#B2D7CE"
      />
    </svg>
  ),
});

type PaperFormat =
  | "letter"
  | "legal"
  | "tabloid"
  | "ledger"
  | "a0"
  | "a1"
  | "a2"
  | "a3"
  | "a4"
  | "a5"
  | "a6";

{
  /* <Head>
<title>tailwindpdf</title>
<meta name="description" content="Embrace the power of HTML and tailwindcss. Create pdf and image from html" />
<meta property="og:title" content="Embrace the power of HTML and tailwindcss. Create pdf and image from html" />
<meta
  property="og:description"
  content="Embrace the power of HTML and tailwindcss. Create pdf and image from html"
/>
<meta property="og:url" content="https://tailwindpdf.com/" />
<meta property="og:type" content="website" />
<link rel="icon" href="/favicon.ico" />
<script src="https://cdn.tailwindcss.com" />
</Head>

 */
}

export function HomePage() {
  return (
    <Box
      as="main"
      bg="#E5E5E5"
      minH="100vh"
      height="full"
      pb={20}
      // position="relative"
    >
      {/* <SupportBanner /> */}
      <VStack
        as="header"
        bg="#065F46"
        alignItems="center"
        gap={0}
        w="full"
        color="bg"
      >
        <NavBar />
        <Box pt={[16, 24]}>
          <Heading
            as="h1"
            maxW="3xl"
            width="full"
            size={["4xl", "6xl"]}
            fontWeight="semibold"
            textAlign="center"
          >
            Create PDFs and images from HTML in seconds
          </Heading>
        </Box>
        <Box pt={2}>
          <Heading
            as="h2"
            fontSize={["md", "xl"]}
            fontWeight="light"
            maxW="xl"
            width="full"
            textAlign="center"
          >
            Embrace the power of{" "}
            <Link
              color="inherit"
              textDecor="underline"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            >
              HTML
            </Link>{" "}
            and{" "}
            <Link
              color="inherit"
              textDecor="underline"
              href="https://tailwindcss.com/"
            >
              tailwindcss
            </Link>
            {/* <Box pt={10}>
              <Choice />
            </Box> */}
          </Heading>
        </Box>
        <FileFromCodeTemplates />
        <HStack h={[16, 20]} />
      </VStack>
      <Box bg="#E5E5E5" h="full">
        <Box h={20} bg="#065F46"></Box>
        <EditableContent />
      </Box>
      <HStack justifyContent="center" pt={16}>
        <AspectRatio
          ratio={16 / 9}
          maxW="530px"
          w="full"
          h="405px"
          bg="white"
          rounded="lg"
          shadow="xs"
          overflow="hidden"
        >
          <iframe
            title="tailwindpdf"
            src="https://cards.producthunt.com/cards/posts/342599?v=1"
            allowFullScreen
          />
        </AspectRatio>
        {/* <Box
          shadow="base"
          rounded={["none", "md"]}
          as="iframe"
          bg="white"
          src="https://cards.producthunt.com/cards/posts/342599?v=1"
          maxW="530px"
          w="full"
          height="405px"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
        ></Box> */}
      </HStack>
      {/* <Footer /> */}
      {/* <FeedbackForm /> */}
    </Box>
  );
}

function EditableContent() {
  const { apiProps } = useStore();
  const { type } = apiProps;
  const isWebsite = type === "web";

  return (
    <Box
      mt={-20}
      mx="auto"
      maxW="6xl"
      width="full"
      bg="white"
      rounded="md"
      shadow="xs"
      p={[4, 6]}
    >
      <Stack
        gap={4}
        direction={["column", "row"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        h="full"
      >
        {isWebsite ? <WebsiteUrlInput /> : <ToggleViewMode />}
        <Box pt={isWebsite ? 1 : 0} w={["full", "auto"]}>
          <Download />
        </Box>
      </Stack>
      {!isWebsite && (
        <Box pt={4} pb={6} h="full">
          <EditableContentHeading />
        </Box>
      )}
      {!isWebsite && <ViewMode />}
    </Box>
  );
}

// function Choice() {
//   const { onApiPropChange, apiProps } = useStore();
//   const { type } = apiProps;

//   return (
//     <Group
//       //   attached
//       direction={["column", "row"]}
//       borderWidth="0.5px"
//       borderColor="#E2E8F0"
//       rounded="md"
//       p={1.5}
//     >
//       <Button
//         fontSize="md"
//         fontWeight="semibold"
//         px={4}
//         // leftIcon={<HiOutlineCode fontSize={20} />}
//         onClick={() => onApiPropChange("type", "doc")}
//         bg={type === "doc" || type === "image" ? "#D1FAE5" : "transparent"}
//         color={type === "doc" || type === "image" ? "#065F46" : "white"}
//         _hover={{}}
//       >
//         Create file from code
//       </Button>
//       <Button
//         fontSize="md"
//         fontWeight="semibold"
//         px={4}
//         // leftIcon={<HiOutlineGlobeAlt fontSize={20} />}
//         onClick={() => onApiPropChange("type", "web")}
//         bg={type === "web" ? "#D1FAE5" : "transparent"}
//         color={type === "web" ? "#065F46" : "white"}
//         _hover={{}}
//       >
//         Create file from website
//       </Button>
//     </Group>
//   );
// }

function FileFromCodeTemplates() {
  const { apiProps, onChangeUsecase, usecase: selected } = useStore();
  const { type } = apiProps;

  if (type === "web") return null;

  return (
    <>
      <Box pt={8}>
        <Text
          fontSize={["md", "xl"]}
          maxW="3xl"
          width="full"
          textAlign="center"
        >
          Select a template
        </Text>
      </Box>
      <SimpleGrid
        maxW="3xl"
        w="full"
        pt={4}
        gap={[3, 4]}
        columns={[2, 4]}
        px={4}
      >
        {usecase.map(({ id, title, url, icon, bg }, index) => (
          <Button
            pl={0}
            fontWeight="semibold"
            key={id}
            color="gray.900"
            size="lg"
            // fontSize={["sm", "md"]}
            bg="white"
            display="flex"
            justifyContent="start"
            h={[12, 14]}
            onClick={() => onChangeUsecase(usecase[index])}
            // shadow={id === selected.id ? "outline" : "none"}
          >
            <HStack
              bg={bg}
              h="full"
              w={12}
              roundedLeft="sm"
              justifyContent="center"
            >
              {icon}
            </HStack>
            <Box as="span" pl={3}>
              {title}
            </Box>
          </Button>
        ))}
      </SimpleGrid>
    </>
  );
}

// function SupportBanner() {
//   const { isOpen, onOpen, onToggle } = useDisclosure();

//   React.useEffect(() => {
//     setTimeout(onOpen, 2000);
//   }, []);

//   return (
//     <Collapse in={isOpen}>
//       <Stack
//         p={2}
//         gap={[0, 2]}
//         direction={["column", "row"]}
//         justifyContent="center"
//         alignItems="center"
//         color="white"
//         bg="gray.900"
//         w="full"
//       >
//         <HStack justifyContent="center">
//           <Box as="span" fontSize={["md", "lg"]}>
//             🇱🇹
//           </Box>
//           <Box as="span" fontSize={["xs", "md"]}>
//             ❤️
//           </Box>
//           <Box as="span" fontSize={["md", "lg"]}>
//             🇺🇦
//           </Box>
//         </HStack>
//         <Link fontSize={["xs", "sm"]} isExternal href="https://blue-yellow.lt/en/" textTransform="uppercase">
//           Help Provide Humanitarian Aid to Ukraine.
//         </Link>
//       </Stack>
//     </Collapse>
//   );
// }

function EditableContentHeading() {
  const { mode, usecase } = useStore();

  return (
    <HStack>
      <Stack
        rounded="md"
        py={1.5}
        px={2}
        borderRadius="md"
        borderWidth="1px"
        borderColor="#F1F5F9"
      >
        {mode === "code" ? (
          <Text fontSize="sm">
            Edit the code here or in{" "}
            <Link textDecor="underline" href={usecase.url} color="#065F46">
              Tailwindcss playground
            </Link>{" "}
            and when you are done, paste the code here
          </Text>
        ) : (
          <Text fontSize="sm">Click on a text to edit</Text>
        )}
      </Stack>
    </HStack>
  );
}

function NavBar() {
  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      left={0}
      bg="#065F46"
      py={3}
      zIndex={999}
      shadow="sm"
      w="full"
      px={4}
    >
      <HStack maxW="7xl" width="full" mx="auto">
        <HStack
          flex={1}
          justifyContent={["center", "flex-start"]}
          // color="white"
        >
          <LogoIcon size="2xl" />
          <Text>tailwindpdf</Text>
        </HStack>
        <HStack flex={1} justifyContent="flex-end" gap={4}>
          <Box display={["none", "block"]} h={10}>
            <ProductHuntBanner />
          </Box>
          <Box>
            <FeedbackDialog />
          </Box>
          {/* <Box>
            <Button
              as={Link}
              href="https://tailwindstream.io"
              isExternal
              bg="white"
              color="gray.900"
              fontSize="sm"
              _hover={{}}
              _active={{
                bg: "#065F46",
              }}
              rightIcon={<Box as="span">🎉</Box>}
            >
              Try the api
            </Button>
          </Box> */}
        </HStack>
      </HStack>
    </Box>
  );
}

function ProductHuntBanner() {
  return (
    <Link href="https://www.producthunt.com/posts/tailwindpdf?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tailwindpdf">
      <Image
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=342599&theme=light"
        alt="tailwindpdf - Create&#0032;PDF&#0032;or&#0032;Image&#0032;from&#0032;HTML&#0032;styled&#0032;with&#0032;tailwindcss | Product Hunt"
        height={10}
      />
    </Link>
  );
}

const formats = [
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "ledger",
  "legal",
  "letter",
  "tabloid",
];

function Download() {
  return (
    <>
      <Box width="full" display={["block", "none"]}>
        <DownloadModal />
      </Box>
      <Box display={["none", "block"]}>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button size="md" bg="#065F46" fontWeight="semibold">
              Download
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <DownloadContent />
                {/* <Menu.Item value="rename">Rename</Menu.Item>
                <Menu.Item value="export">Export</Menu.Item> */}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
        {/* <Menu placement="bottom-end">
          <MenuButton
            w={["full", "auto"]}
            as={Button}
            bg="#065F46"
            color="white"
            fontSize="sm"
            _hover={{}}
            _active={{
              bg: "#065F46",
            }}

          >
            Download
          </MenuButton>
          <MenuList
            px={5}
            pb={5}
            pt={0}
            border="none"
            shadow="lg"
            overflow="hidden"
          >
            <DownloadContent />
          </MenuList>
        </Menu> */}
      </Box>
    </>
  );
}

function ViewMode() {
  const { html, mode, updateHtml, usecase } = useStore();

  function createMarkup() {
    return { __html: html.current };
  }

  // @ts-ignore
  const handleEditorChange = (value, event) => {
    updateHtml(value);
  };

  if (mode === "code") {
    return (
      <Box borderRadius="md" borderWidth="1px" borderColor="#F1F5F9" h="full">
        <Editor
          key={usecase.id}
          height="60vh"
          defaultLanguage="html"
          defaultValue={html.current}
          onChange={handleEditorChange}
        />
      </Box>
    );
  }

  return (
    <Frame
      style={{
        width: "100%",
        minHeight: "60vh",
        border: "none",
        display: "block",
      }}
      initialContent={`
        <!DOCTYPE html><html>
        <head>
          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        </head>
        <body>
          <div id="mountHere"></div>
        </body>
      </html>`}
      mountTarget="#mountHere"
    >
      <FrameContextConsumer>
        {({ document }) => (
          <div
            dangerouslySetInnerHTML={createMarkup()}
            contentEditable={true}
            // @ts-expect-error
            onKeyUp={(e) => updateHtml(e.target.innerHTML)}
          />
        )}
      </FrameContextConsumer>
    </Frame>
  );

  // return (
  //   <iframe
  //     ref={ref}
  //     sandbox="allow-same-origin"
  //     style={{ width: "100%", border: 0, height: "60vh" }}
  //   />
  // );

  //   return (
  //     <Box>
  //       <Box overflowX="auto">
  //         {/* <root.div ref={hostRef}> */}
  //         {/* <EnvironmentProvider
  //             value={() => shadowRef?.current?.shadowRoot ?? document}
  //           > */}
  //         <div
  //           key={key}
  //           ref={hostRef}
  //           style={{ width: "400px", height: "400px" }}

  //           //   contentEditable={true}
  //           //   // @ts-ignore
  //           //   onKeyUp={(e) => updateHtml(e.target.innerHTML)}
  //         />
  //         {/* <div dangerouslySetInnerHTML={createMarkup()} /> */}
  //         {/* </EnvironmentProvider> */}
  //         {/* </root.div> */}
  // {/* <div
  //     dangerouslySetInnerHTML={createMarkup()}
  //     contentEditable={true}
  //     onKeyUp={(e) => updateHtml(e.target.innerHTML)}
  //   /> */}
  //       </Box>
  //     </Box>
  //   );
}

function TestApp() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
    </div>
  );
}

function ToggleViewMode() {
  const { mode, onModeToggle } = useStore();
  return (
    <Box>
      <HStack p={1.5} borderRadius="md" borderWidth="1px" borderColor="#F1F5F9">
        <Button
          px={3}
          fontWeight="semibold"
          name="code"
          onClick={onModeToggle}
          size="sm"
          color="#065F46"
          bg={mode === "code" ? "#D1FAE5" : "white"}
          _hover={{}}
        >
          Code Mode
        </Button>
        <Button
          px={3}
          fontWeight="semibold"
          name="preview"
          onClick={onModeToggle}
          size="sm"
          color="#065F46"
          bg={mode === "preview" ? "#D1FAE5" : "white"}
          _hover={{}}
        >
          Preview Mode
        </Button>
      </HStack>
    </Box>
  );
}

// function Footer() {
//   return (
//     <VStack as="footer">
//       <VStack py={16}>
//         <Stack
//           direction={["column", "row"]}
//           gap={0}
//           bg="white"
//           p={1.5}
//           px={3}
//           maxW="3xl"
//           fontSize="sm"
//           color="#475569"
//           justifyContent="center"
//           alignItems="center"
//           borderRadius={["none", "md"]}
//           shadow="base"
//         >
//           <HStack gap={0}>
//             <Box>
//               <Text>Designed by</Text>
//             </Box>
//             <Box pl={1}>
//               <Link textDecor="underline" color="#065F46" href="https://twitter.com/WaleHg" isExternal>
//                 Olawale
//               </Link>
//             </Box>
//             <Box px={2} display={["none", "block"]}>
//               <Box boxSize={1} rounded="full" bg="#475569" />
//             </Box>
//           </HStack>
//           <Box>
//             <Text textAlign={["center", "left"]}>Built with AWS, Prisma, Next.js, Chakra-ui, Tailwindcss</Text>
//           </Box>
//         </Stack>
//       </VStack>
//       <Stack bg="white" w="full" p={2} color="#475569">
//         <Text fontSize="xs" textAlign="center">
//           Crafted with
//           <Box as="span" role="img" aria-label="heart" mx={2}>
//             ❤️
//           </Box>
//           by{" "}
//           <Link isExternal href="https://www.linkedin.com/in/kstulgys/" textDecor="underline">
//             kastproductions
//           </Link>
//         </Text>
//       </Stack>
//     </VStack>
//   );
// }

function DownloadModal() {
  //   const { open, onOpen, onClose } = useDisclosure();
  return (
    <Dialog.Root placement="center">
      <Dialog.Trigger asChild>
        <Box pt={2}>
          <Button
            width="full"
            bg="#065F46"
            // color="white"
            fontSize="sm"
            _hover={{}}
            _active={{
              bg: "#065F46",
            }}
            // onClick={onOpen}
            // rightIcon={<ChevronDownIcon />}
          >
            Download
          </Button>
        </Box>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.CloseTrigger />
          <Dialog.Body>
            <DownloadContent />
          </Dialog.Body>
          {/* <Dialog.Header>
            <Dialog.Title />
          </Dialog.Header>
          <Dialog.Body />
          <Dialog.Footer /> */}
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
    // <>
    //   <Box pt={2}>
    //     <Button
    //       width="full"
    //       bg="#065F46"
    //       color="white"
    //       fontSize="sm"
    //       _hover={{}}
    //       _active={{
    //         bg: "#065F46",
    //       }}
    //       onClick={onOpen}
    //       // rightIcon={<ChevronDownIcon />}
    //     >
    //       Download
    //     </Button>
    //   </Box>

    //   <Modal isOpen={open} onClose={onClose}>
    //     <ModalOverlay />
    //     <ModalContent mt={0} p={4}>
    //   <ModalCloseButton />
    //   <DownloadContent />
    //     </ModalContent>
    //   </Modal>
    // </>
  );
}

function WebsiteUrlInput() {
  const { onApiPropChange, apiProps } = useStore();

  return (
    <Field.Root>
      <Field.Label>Website URL</Field.Label>
      <Input
        fontSize="sm"
        onChange={(e) => onApiPropChange("url", e.target.value)}
        defaultValue={apiProps.url}
        id="url"
      />
      <Field.HelperText>
        If the website is too long it can timeout without success
      </Field.HelperText>
    </Field.Root>
    // <FormControl>
    //   <FormLabel htmlFor="url" fontSize="sm" pb={1}>
    //     Enter the website address
    //   </FormLabel>
    //   <InputGroup>
    //     <Input
    //   fontSize="sm"
    //   onChange={(e) => onApiPropChange("url", e.target.value)}
    //   defaultValue={apiProps.url}
    //   id="url"
    //     />
    //   </InputGroup>
    //   <FormHelperText>
    //     If the website is too long it can timeout without success
    //   </FormHelperText>
    // </FormControl>
  );
}

function DownloadContent() {
  const { onDownload, isDownloading, onApiPropChange, apiProps } = useStore();
  const {
    type,
    output,
    landscape,
    format,
    height,
    dpi,
    width,
    deviceScaleFactor,
  } = apiProps;

  // const isWebsite = type === "web";
  // const isPdf = type === "doc";
  // const isImage = type === "image";

  // React.useEffect(() => {
  //   if (isWebsite) {
  //     onApiPropChange("width", 1600);
  //     onApiPropChange("height", 900);
  //   } else {
  //     onApiPropChange("output", "pdf");
  //     onApiPropChange("width", 210);
  //     onApiPropChange("height", 0);
  //   }
  // }, [isWebsite]);

  return (
    <Stack maxW={390} minW={["auto", 390]} width="full" p={2} gap={3}>
      {/* {!isWebsite && (
        <Stack gap={0}>
          <Text pb={1} fontSize="sm" fontWeight="medium">
            Download type
          </Text>
          <RadioGroup.Root
            defaultValue={type}
            onValueChange={(value) => {
              onApiPropChange("type", value.value);
              if (value.value === "doc") {
                onApiPropChange("output", "pdf");
              }
              if (value.value === "image") {
                onApiPropChange("output", "jpeg");
              }
            }}
          >
            <HStack gap={4}>
              <RadioGroup.Item key="doc" value="doc">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>PDF</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item key="image" value="image">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>Image</RadioGroup.ItemText>
              </RadioGroup.Item>
            </HStack>
          </RadioGroup.Root>
        </Stack>
      )} */}

      {/* {isImage && (
        <Stack>
          <Stack gap={0}>
            <Text pt={3} pb={1} fontSize="sm" fontWeight="medium">
              Type
            </Text>
            <RadioGroup.Root
              defaultValue={output}
              onValueChange={(value) => {
                onApiPropChange("output", value.value);
              }}
            >
              <HStack gap={4}>
                <RadioGroup.Item key="jpeg" value="jpeg">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>JPEG</RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item key="png" value="png">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>PNG</RadioGroup.ItemText>
                </RadioGroup.Item>
              </HStack>
            </RadioGroup.Root>
          </Stack>

          <Stack gap={0} pt={4}>
            <Field.Root>
              <Field.Label>Image width</Field.Label>
              <InputGroup endAddon="mm">
                <NumberInput.Root
                  width="full"
                  defaultValue={width.toString()}
                  value={width.toString()}
                  onValueChange={(details) =>
                    onApiPropChange("width", +details.value)
                  }
                >
                  <NumberInput.Control />
                  <NumberInput.Input />
                </NumberInput.Root>
              </InputGroup>
              <Field.HelperText>
                Make sure this width is the same as in html
              </Field.HelperText>
            </Field.Root>
          </Stack>
          <Stack gap={0} pt={4}>
            <Field.Root>
              <Field.Label>Image height</Field.Label>
              <InputGroup endAddon="mm">
                <NumberInput.Root
                  width="full"
                  defaultValue={height.toString()}
                  value={height.toString()}
                  onValueChange={(details) =>
                    onApiPropChange("height", +details.value)
                  }
                >
                  <NumberInput.Control />
                  <NumberInput.Input />
                </NumberInput.Root>
              </InputGroup>
              <Field.HelperText>
                Make sure this height is the same as in html or leave it at 0
              </Field.HelperText>
            </Field.Root>
          </Stack>
          <Stack gap={0} pt={4}>
            <Field.Root>
              <Field.Label>Scale factor</Field.Label>
              <RadioGroup.Root
                defaultValue={deviceScaleFactor.toString()}
                onValueChange={(value) => {
                  onApiPropChange("deviceScaleFactor", +value.value!);
                }}
              >
                <HStack gap={4}>
                  {[1, 2, 3, 4, 5, 6].map((scaleFactor) => (
                    <RadioGroup.Item
                      key={scaleFactor}
                      value={scaleFactor.toString()}
                    >
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>{scaleFactor}</RadioGroup.ItemText>
                    </RadioGroup.Item>
                  ))}
                </HStack>
              </RadioGroup.Root>
              <Field.HelperText>Makes better DPI</Field.HelperText>
            </Field.Root>
          </Stack>
          {/* <Stack> */}
      {/* <Text pt={3} pb={2} fontSize="sm" fontWeight="medium">
              Image resolution
            </Text> */}
      {/* <Slider
              min={100}
              max={600}
              step={50}
              defaultValue={dpi}
              onChange={(value) => onApiPropChange("dpi", value)}
            >
              <SliderMark value={100} mt="2" fontSize="sm">
                100 dpi
              </SliderMark>
              <SliderMark value={300} mt="2" ml={-5} fontSize="sm">
                300 dpi
              </SliderMark>
              <SliderMark value={600} mt="2" ml="-14" fontSize="sm">
                600 dpi
              </SliderMark>
              <SliderTrack h={1.5}>
                <SliderFilledTrack bg="#059669" />
              </SliderTrack>
              <SliderThumb bg="#065F46" />
            </Slider> */}
      {/* </Stack> */}
      {/* </Stack>
      )} */}
      <Stack>
        <Stack gap={0}>
          <Text pt={3} pb={1} fontSize="sm" fontWeight="medium">
            Orientation
          </Text>

          <RadioGroup.Root
            defaultValue={landscape ? "landscape" : "portrait"}
            onValueChange={(value) => {
              onApiPropChange(
                "landscape",
                value.value === "landscape" ? true : false
              );
            }}
          >
            <HStack gap={4}>
              <RadioGroup.Item key="portrait" value="portrait">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>portrait</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item key="landscape" value="landscape">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>landscape</RadioGroup.ItemText>
              </RadioGroup.Item>
            </HStack>
          </RadioGroup.Root>
        </Stack>
        <Stack>
          <Text pt={4} pb={1} fontSize="sm" fontWeight="medium">
            Paper size
          </Text>
          <NativeSelect.Root>
            <NativeSelect.Field
              defaultValue={format}
              onChange={(e) => onApiPropChange("format", e.target.value)}
            >
              {formats.map((format) => (
                <option key={format} value={format}>
                  {format}
                </option>
              ))}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Stack>
      </Stack>

      {/* {isWebsite && (
        <Stack gap={0}>
          <Stack gap={0}>
            <Text pb={1} fontSize="sm" fontWeight="medium">
              Output type
            </Text>

            <RadioGroup.Root
              defaultValue={output}
              pt={1}
              onValueChange={(value) => onApiPropChange("output", value.value)}
            >
              <HStack gap={4}>
                <RadioGroup.Item key="pdf" value="pdf">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>PDF</RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item key="jpeg" value="jpeg">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>JPEG</RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item key="png" value="png">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>PNG</RadioGroup.ItemText>
                </RadioGroup.Item>
              </HStack>
            </RadioGroup.Root>
          </Stack>
          <HStack gap={4} pt={4}>
            <Fieldset.Root>
              <Field.Root>
                <Field.Label>Viewport width</Field.Label>
                <InputGroup endAddon="px">
                  <Input
                    type="number"
                    onChange={(e) =>
                      onApiPropChange("width", e.target.valueAsNumber)
                    }
                    value={width}
                    id="width"
                  />
                </InputGroup>
              </Field.Root>
              <Field.Root>
                <Field.Label>Viewport height</Field.Label>
                <InputGroup endAddon="px">
                  <Input
                    type="number"
                    onChange={(e) =>
                      onApiPropChange("height", e.target.valueAsNumber)
                    }
                    value={height}
                    id="height"
                  />
                </InputGroup>
              </Field.Root>
            </Fieldset.Root>
          </HStack>
        </Stack>
      )} */}
      <Box pt={3}>
        <Button
          w="full"
          bg="#065F46"
          // color="white"
          fontSize="sm"
          _hover={{}}
          _active={{
            bg: "#065F46",
          }}
          loading={isDownloading}
          onClick={onDownload}
        >
          Download
        </Button>
      </Box>
    </Stack>
  );
}

// function ForbusinessModal() {
//   const { open, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Box>
//         <Button
//           bg="white"
//           color="gray.900"
//           fontSize="sm"
//           _hover={{}}
//           _active={{
//             bg: "#065F46",
//           }}
//           onClick={onOpen}
//         //   rightIcon={<Box as="span">🎉</Box>}
//         >
//           Try the api
//         </Button>
//       </Box>

//       <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent mt={[0, 48]} p={10}>
//           <ModalCloseButton />
//           <Stack>
//             <Alert status="warning" rounded="md">
//               <AlertIcon />
//               <Text as="span" ml={1}>
//                 This public api is free forever but it's throttled so might not
//                 be available 100% of the time.
//               </Text>
//             </Alert>
//             <Box as="pre" fontSize="xs" bg="gray.50" rounded="lg" p={4}>
//               {codeExample}
//             </Box>

//             <Alert status="info" rounded="md">
//               <AlertIcon />
//               <Text as="span" ml={1}>
//                 Any enquiries you might have please reach out to{" "}
//                 <Link
//                   isExternal
//                   href="mailto:hello@kastproductions.com"
//                   fontWeight="semibold"
//                 >
//                   hello@kastproductions.com
//                 </Link>
//               </Text>
//             </Alert>
//           </Stack>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// const sampleHtml = `<div class="text-sky-500">Hi Mom!</div>`;

// const codeExample = `
// const apiUrl = "https://36jztxpsha.execute-api.us-east-1.amazonaws.com";

// async function downloadPdf() {
//   const response = await fetch(apiUrl, {
//     method: "POST",
//     body: JSON.stringify({
//       html: '${sampleHtml}',
//       format: "a4", // "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6"
//     }),
//     headers: {
//       "Content-Type": "application/json",
//       "x-api-key": "pfkxpfdx8vchhdd0f4mo87ax", // public api key
//     },
//   });
//   if (response.ok) {
//     const blob = await response.blob();
//     downloadToBrowser(blob);
//   } else {
//     const { error } = await response.json();
//     console.log(error);
//   }
// }

// function downloadToBrowser(blob: Blob) {
//   const url = window.URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "generated.pdf";
//   document.body.appendChild(a);
//   a.click();
//   a.remove();
// }
// `;

// export async function getServerSideProps() {
//   let count = 0;
//   try {
//     const data = await getDownloadsCount();
//     count = data?.count;
//   } catch (e) {}
//   return { props: { count } };
// }

// function FeedbackForm() {
//   return (
//     <Float placement="bottom-end" m={10}>
//       <Circle size="5" bg="red" color="white">
//         3
//       </Circle>
//     </Float>
//   );
// }

function FeedbackDialog() {
  const [email, setEmail] = React.useState("");
  const [body, setBody] = React.useState("");
  const [reason, setReason] = React.useState("Feedback");

  const [isLoading, setIsLoading] = React.useState(false);

  // const createFeedback = useMutation(api.feedback.create);
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Dialog.Root size={{ mdDown: "full", md: "md" }}>
      <Dialog.Trigger asChild>
        <Button>Get in touch! 📬</Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.CloseTrigger asChild>
            <Button variant="ghost" ref={closeBtnRef}>
              Close
            </Button>
          </Dialog.CloseTrigger>
          <Dialog.Header>
            <Dialog.Title />
          </Dialog.Header>
          <Dialog.Body color="fg">
            <Fieldset.Root
              as="form"
              size="lg"
              maxW="md"
              pt={4}
              onSubmit={async (e) => {
                e.preventDefault();
                if (!email.trim() || !body.trim() || !reason) {
                  return;
                }
                setIsLoading(true);
                console.log({ body, email, reason });
                try {
                  await sendFeedback({ body, email, reason });
                  setEmail("");
                  setBody("");
                  setReason("Feedback");
                  closeBtnRef.current?.click();
                } catch (e) {
                  console.log(e);
                } finally {
                  setIsLoading(false);
                }
              }}
            >
              <Stack>
                <Fieldset.Legend>We’d love to hear from you</Fieldset.Legend>
                <Fieldset.HelperText>
                  Tell us what you need — feedback, feature requests, bugs, or
                  API access.
                </Fieldset.HelperText>
              </Stack>

              <Fieldset.Content gap={6}>
                <Field.Root required>
                  <Field.Label>Email address</Field.Label>
                  <Input
                    value={email}
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label>What brings you here?</Field.Label>
                  <RadioGroup.Root
                    value={reason}
                    onValueChange={(value) => {
                      setReason(value.value!);
                    }}
                  >
                    <Stack gap={4}>
                      {[
                        {
                          title: "Feedback",
                          helperText: "What do you like? What could be better?",
                          value: "Feedback",
                        },
                        {
                          title: "Feature requests",
                          helperText:
                            "What would you like us to build? Any examples?",
                          value: "Feature requests",
                        },
                        {
                          title: "Bugs",
                          helperText:
                            "What went wrong? Steps to reproduce + browser/OS",
                          value: "Bugs",
                        },
                        {
                          title: "API access/partnership",
                          helperText:
                            "How do you plan to use the API? Expected volume?",
                          value: "API access/partnership",
                        },
                      ].map((item) => (
                        <Stack gap={0}>
                          <RadioGroup.Item key={item.title} value={item.value}>
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>
                              {item.title}
                            </RadioGroup.ItemText>
                          </RadioGroup.Item>
                          <Field.HelperText ml={8}>
                            {item.helperText}
                          </Field.HelperText>
                        </Stack>
                      ))}
                    </Stack>
                  </RadioGroup.Root>
                </Field.Root>

                <Field.Root required>
                  <Field.Label>Message</Field.Label>
                  <Textarea
                    value={body}
                    placeholder="Type your message here..."
                    rows={8}
                    name="message"
                    onChange={(e) => setBody(e.target.value)}
                  />
                </Field.Root>
              </Fieldset.Content>
              <Button loading={isLoading} type="submit" alignSelf="flex-start">
                Send message
              </Button>
            </Fieldset.Root>
          </Dialog.Body>
          <Dialog.Footer />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}

// async function postToTelegramBot(){
//   const url="https://famous-cheetah-587.convex.site/telegram/webhook"
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       message: "Hello from Convex",
//     }),
//   });
// }
