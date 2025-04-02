import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSubmissionSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactSubmissionSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      return res.status(200).json({ success: true, data: submission });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to process your message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
