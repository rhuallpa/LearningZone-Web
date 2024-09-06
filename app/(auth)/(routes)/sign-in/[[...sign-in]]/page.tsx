import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        variables: {
          colorPrimary: "#6F4EF6",
          colorBackground: "rgba(255, 255, 255, 0.1)",
          colorText: "#FFFFFF",
        },
        elements: {
          card: {
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            borderRadius: "0.75rem",
          },
          formButtonPrimary: {
            background: "#6F4EF6",
            borderRadius: "0.375rem",
            ":hover": {
              background: "#5a3dcf",
            },
          },
          headerTitle: {
            fontSize: "1.875rem",
            fontWeight: "700",
            color: "#FFFFFF",
          },
          headerSubtitle: {
            fontSize: "1rem",
            color: "#D2DAE9",
          },
          header: {
            textAlign: "left",
            marginBottom: "1.5rem",
          },
        },
      }}
    />
  );
}
