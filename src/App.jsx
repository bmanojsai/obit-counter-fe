import { useMutation } from "@tanstack/react-query";

import ObitForm from "./components/ObitForm";
import "./App.css";

const API_BASE_URL = import.meta.env.VITE_OBIT_COUNT_BE_API;

function App() {
  const findObitsbyURL = async (values) => {
    const response = await fetch(`${API_BASE_URL}/obituaries/count`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: values.url,
        noOfDays: values.noOfDays,
        obitListIdentifier: values.obitListIdentifier,
        uniqueObitDateIdentifier: values.uniqueObitDateIdentifier || null,
        nextPageIdentifier: values.nextPageIdentifier,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Network response was not ok");
    }

    return await response.json();
  };

  const mutation = useMutation({
    mutationFn: findObitsbyURL,
    onError: (error) => {
      console.error("Mutation error:", error); // Debug log
    },
    onSuccess: (data) => {
      console.log("Mutation success with data:", data); // Debug log
    },
  });

  return (
    <>
      <nav>
        <h1 className="text-4xl my-8">Obit Counter</h1>
      </nav>
      <header className="mt-4 mb-4 sm:mb-12">
        <i>
          Fill the form and click submit to get the number of obituaries in the
          required number of days.
        </i>
      </header>
      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-8 ">
        <div className="flex-1 sm:px-8 sm:mx-auto sm:max-w-[50%]">
          <ObitForm
            onSubmit={(values) => mutation.mutate(values)}
            defaultValues={mutation.data}
          />
        </div>

        {(mutation.isPending || mutation.isError || mutation.isSuccess) && (
          <div className="flex-1 flex justify-center items-center sm:px-8">
            {mutation.isPending && (
              <lord-icon
                src="https://cdn.lordicon.com/flabvqvs.json"
                trigger="loop"
                state="loop-snake-alt"
                class="w-16 h-16 sm:w-24 sm:h-24"
              ></lord-icon>
            )}
            {mutation.isError && (
              <div className="border-2 border-red-400 my-4 p-4 rounded-md  w-full flex  justify-center items-center sm:border-0 sm:flex-col">
                <lord-icon
                  src="https://cdn.lordicon.com/juujmrhr.json"
                  trigger="hover"
                  state="hover-error-2"
                  class="mr-2 w-8 h-8 sm:w-24 sm:h-24 sm:mb-8"
                ></lord-icon>
                <p>Error: {mutation.error.message}</p>
              </div>
            )}
            {mutation.isSuccess && (
              <div className="border-2 border-green-500 my-4 p-4 rounded-md w-full flex justify-center items-center sm:border-0 sm:flex-col">
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/rxgzsafd.json"
                  trigger="hover"
                  class="mr-2 w-12 h-12 sm:w-24 sm:h-24 sm:mb-8"
                ></lord-icon>
                <i>
                  Total Obituraties listed in last {mutation.data?.noOfDays}{" "}
                  days are <strong className="text-3xl sm:text-5xl">{mutation.data?.totalObituaries}</strong>.
                </i>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
