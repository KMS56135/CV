import { Layout } from "../layout/Layuot"
import { Hero } from "../hero/Hero";
import { Skills } from "../skills/Skills";
import { Project } from "../project/Project";

export const App = () => {
    return (
        <Layout>
            <Hero />
            <Skills />
            <Project />
        </Layout>
    );
};
