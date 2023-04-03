import { TextInput } from "@mantine/core";
import React from "react";

function LoginForm() {
    return (
        <div className="w-2/3">
            LoginForm
            <TextInput placeholder="Email" label="Email" withAsterisk />
            <TextInput placeholder="Password" label="Password" withAsterisk />
        </div>
    );
}

export default LoginForm;
