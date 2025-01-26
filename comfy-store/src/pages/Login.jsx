import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/UserSlice";

export const action = (store) => async ({request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData);
    try {
        const response = await customFetch.post("/auth/local", data)
        store.dispatch(loginUser(response.data))
        toast.success("LoggedIn successfully!")
        return redirect("/")
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || "Please double check your credentials"
        toast.error(errorMessage)
        return null;
    }
}

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const loginDemoUser = async () => {
        try {
            const response = await customFetch.post("/auth/local", {
                identifier: "test@test.com",
                password: "secret"
            })
            dispatch(loginUser(response.data))
            navigate("/");
            toast.success("Welcome guest user!");
        } catch (error) {
            toast.error("Failed to login user please try again!")
        }
    }
    return (
        <section className="h-screen grid place-items-center">
            <Form
                method="post"
                className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
            >
                <h4 className="text-center text-3xl font-bold">Login</h4>
                <FormInput
                    type="email"
                    name="identifier"
                    label="email"
                />
                <FormInput
                    type="password"
                    name="password"
                    label="password"
                />
                <div className="mt-4">
                    <SubmitBtn text="Login" />
                </div>
                <button type="button" className="btn btn-secondary btn-block" onClick={loginDemoUser}>
                    guest user
                </button>
                <p className="text-center">
                    Not a member yet?
                    <Link
                        to="/register"
                        className="ml-2 link link-hover link-primary capitalize"
                    >
                        register
                    </Link>
                </p>
            </Form>
        </section>
    );
};

export default Login;
