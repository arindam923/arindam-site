'use server'

import { sql } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { toast } from "sonner"
// import { redirect } from "next/navigation"


export const fixMetting = async (formData: FormData) => {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const project = formData.get("project");
    const time = new Date();

    await sql(
      `
    INSERT INTO APPOINTMENT (name, time, email, project_explanation)
    VALUES ($1, $2, $3, $4)
`,
      [name, time, email, project]
    );


  };
