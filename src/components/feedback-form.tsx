"use client";

import React from "react";
import {
  Stack,
  Button,
  RadioGroup,
  Input,
  Dialog,
  Field,
  Fieldset,
  Textarea,
} from "@chakra-ui/react";
import { useMutation } from "convex/react";
import { api } from "~/convex/api";
import { sendFeedback } from "~/server";
import { z } from "zod";

const feedbackSchema = z.object({
  email: z.email("Please enter a valid email address"),
  body: z.string().min(1, "Message is required"),
  reason: z.string().min(1, "Please select a reason"),
});

export function FeedbackForm() {
  const [email, setEmail] = React.useState("");
  const [body, setBody] = React.useState("");
  const [reason, setReason] = React.useState("Feedback");

  const [isLoading, setIsLoading] = React.useState(false);
  const [emailError, setEmailError] = React.useState<string>("");

  const createFeedback = useMutation(api.feedback.create);
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
            <Fieldset.Root size="lg" maxW="md" pt={4}>
              <Stack>
                <Fieldset.Legend>We’d love to hear from you</Fieldset.Legend>
                <Fieldset.HelperText>
                  Tell us what you need — feedback, feature requests, bugs, or
                  API access.
                </Fieldset.HelperText>
              </Stack>

              <Fieldset.Content gap={6}>
                <Field.Root required invalid={!!emailError}>
                  <Field.Label>
                    Email address
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    value={email}
                    name="email"
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                  />
                  {emailError && (
                    <Field.ErrorText>{emailError}</Field.ErrorText>
                  )}
                </Field.Root>

                <Field.Root required>
                  <Field.Label>
                    What brings you here?
                    <Field.RequiredIndicator />
                  </Field.Label>
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
                  <Field.Label>
                    Message
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Textarea
                    value={body}
                    placeholder="Type your message here..."
                    rows={8}
                    name="message"
                    onChange={(e) => setBody(e.target.value)}
                  />
                </Field.Root>
              </Fieldset.Content>
              <Button
                loading={isLoading}
                type="submit"
                alignSelf="flex-start"
                onClick={async () => {
                  const payload = { body, email, reason };

                  // Validate using zod schema
                  const result = feedbackSchema.safeParse(payload);

                  if (!result.success) {
                    const errors = z.treeifyError(result.error);
                    const emailError = errors.properties?.email?.errors?.[0];
                    if (emailError) {
                      setEmailError(emailError);
                    }
                    return;
                  }

                  setIsLoading(true);
                  try {
                    await Promise.allSettled([
                      sendFeedback(payload),
                      createFeedback(payload),
                    ]);
                    setEmail("");
                    setBody("");
                    setReason("Feedback");
                    setEmailError("");
                    closeBtnRef.current?.click();
                  } catch (e) {
                    console.log(e);
                  } finally {
                    setIsLoading(false);
                  }
                }}
              >
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
