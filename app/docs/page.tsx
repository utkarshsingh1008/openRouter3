import { title } from "@/components/primitives";
import CardComponent from "./cardComponent";
import Sidebar from "@/components/sidebar";


export default function DocsPage() {
  return (
    <div className="flex   justify-between ">  
      <div className="ml-16 fixed ">
        <Sidebar />
        </div> 
        <div className="lg:ml-96 text-center mb-4">
      <h1 className={title()} >Docs</h1>
      <p className="m-4">
        The future will bring us hundreds of language models and dozens of
        providers for each. How will you choose the best?
      </p>
      <span className="font-medium">Prioritize price or performance. </span>{" "}
      <p>
        OpenRouter scouts for the lowest prices and best latencies/throughputs
        across dozens of providers, and lets you choose how to prioritize them. <br/>
        <span className="font-medium"> Standardized API.</span> No need to
        change your code when switching between models or providers. You can
        even let users your choose and pay for their own.<br/>
        <span className="font-medium">
          The best models will be used the most.
        </span>
        Evals are flawed. Instead, compare models by how often they're used, and
        soon, for which purposes. Chat with multiple at once in the Playground.
      </p>
	  <h1 className="mt-16 font-medium text-2xl ">Quick Sort</h1>
	  <CardComponent/>
	  <CardComponent/>  <CardComponent/>  <CardComponent/>
	</div></div>
 
  );
}