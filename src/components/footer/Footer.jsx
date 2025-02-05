import { Form } from "../form/Form";

export const Footer = () => {
    return (
        <footer className="bg-gray-950">
            <div className="flex justify-between container mx-auto py-36">
                <h2 className="font-bold text-5xl text-white mb-20">
                    Contact
                </h2>
                <Form />
            </div>
        </footer>
    );
};