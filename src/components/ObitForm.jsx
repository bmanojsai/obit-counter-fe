import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  url: z.string().url(),
  noOfDays: z.number().min(1),
  obitListIdentifier: z.string(),
  uniqueObitDateIdentifier: z.string().optional(),
  nextPageIdentifier: z.string(),
});

const ObitForm = ({ onSubmit, defaultValues, isPending }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      noOfDays: 10,
      ...defaultValues, // Merge default values from props
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (defaultValues) {
      form.reset(defaultValues); // Reset all fields with default values
    }
  }, [defaultValues, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL*</FormLabel>
              <FormControl>
                <Input placeholder="https://" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="noOfDays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number Of Days*</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="obitListIdentifier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unique Obituary List Identifier*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nextPageIdentifier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Next Page Identifier*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="uniqueObitDateIdentifier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unique Obituary Date Identifier</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full cursor-pointer">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ObitForm;
