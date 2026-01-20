import Error from "@/components/error/Index";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "404 error || Devnot",
};
const index = () => {
   return (
      <Wrapper>
         <Error />
      </Wrapper>
   )
}

export default index
