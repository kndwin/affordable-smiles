import { useMediaQuery } from "react-responsive";

export const useBreakpoints = () => {
  const xs = useMediaQuery({ query: "(max-width: 720px)" });
  const sm = useMediaQuery({ query: "(max-width: 960px)" });
  const md = useMediaQuery({ query: "(max-width: 1280px)" });
  const lg = useMediaQuery({ query: "(max-width: 1440px)" });
  const xl = useMediaQuery({ query: "(max-width: 1660px)" });

	return {
		xs, sm, md, lg, xl
	}
}
