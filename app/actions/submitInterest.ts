"use server";

import { z } from "zod";

const schema = z.object({
    projects: z.array(z.string()).min(1, "Välj minst ett projekt"),
    firstName: z.string().min(1, "Ange ditt förnamn"),
    lastName: z.string().min(1, "Ange ditt efternamn"),
    email: z.email("Ange en giltig e-postadress"),
    phone: z.string().optional(),
    gdpr: z.literal("on", {
        error: "Du måste godkänna integritetspolicyn",
    }),
});

export type FormState = {
    success?: boolean;
    errors?: Partial<Record<keyof z.infer<typeof schema>, string>>;
};

export async function submitInterest(
    _prev: FormState | null,
    formData: FormData,
): Promise<FormState> {
    const result = schema.safeParse({
        projects: formData.getAll("project"),
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        gdpr: formData.get("gdpr"),
    });

    if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;
        return {
            errors: Object.fromEntries(
                Object.entries(fieldErrors).map(([k, v]) => [k, v?.[0]]),
            ) as FormState["errors"],
        };
    }

    // TODO: Mailchimp API call goes here
    console.log("Submitted:", result.data);

    return { success: true };
}
