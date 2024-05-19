import axios from "axios";

export default function Home() {
	const interceptor = axios.interceptors.request.use(async (config) => {
		config.headers["projectid"] = "ue7vjvd5u6er";
		return config;
	  });
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			
		</section>
	);
}
