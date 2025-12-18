"use server";

import fs from "fs";
import path from "path";

const writeFile = async (filePath: string, data: unknown) => {
  try {
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing file:", error);
    throw error;
  }
};

const readFile = async (filePath: string) => {
  try {
    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
};

export async function createProductAction(
  prevState: unknown,
  formData: FormData
) {
  // verify auth
  // verify input validation and sanitization
  // verify authorization

  if (!process.env.AUTH_SECRET) {
    return {
      success: false,
      message: "Unauthorized",
      error: "Unauthorized",
    };
  }
  try {
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    console.log("Creating product:", { name, price, description });

    const filePath = path.join(process.cwd(), "public", "products.json");

    let products;

    if (fs.existsSync(filePath)) {
      products = await readFile(filePath);
    }

    products.push({ name, price, description });

    await writeFile(filePath, products);

    return {
      success: true,
      message: `Product "${name}" created successfully`,
      error: null,
    };
  } catch (error) {
    console.error("Error creating product:", error);
    return {
      success: false,
      message: "Error creating product",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
