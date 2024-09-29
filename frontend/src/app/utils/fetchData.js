import { toast } from "react-toastify";

export async function fetchData(endpoint) {
  const baseUrl = process.env.NEXT_PUBLIC_BE_API_URL;

  try {
    const res = await fetch(`${baseUrl}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function formRequest(endpoint, form_object, refetch, method) {
  const baseUrl = process.env.NEXT_PUBLIC_BE_API_URL;

  try {
    const res = await fetch(`${baseUrl}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      body: JSON.stringify(form_object),
    });

    const data = await res.json();

    if (!res.ok) {
      return toast.error(data.message, {
        isLoading: false,
        autoClose: 1000,
      });
    }
    refetch();
    return toast.success(data.message, {
      isLoading: false,
      autoClose: 1000,
    });
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteRequest(endpoint, refetch) {
  const baseUrl = process.env.NEXT_PUBLIC_BE_API_URL;
  try {
    const res = await fetch(`${baseUrl}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      return toast.error(data.message, {
        isLoading: false,
        autoClose: 1000,
      });
    }

    refetch();
    return toast.success(data.message, {
      isLoading: false,
      autoClose: 1000,
    });
  } catch (err) {
    throw new Error(err);
  }
}
