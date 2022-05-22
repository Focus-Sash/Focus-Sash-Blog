import {
  Flex,
  Text,
  Link,
  useDisclosure,
  Heading,
  Container,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { getSortedPostsData } from "../lib/posts";
import { TopBar } from "../components/topbar";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: any) {
  const { onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>感想 - ふろんてぃあ*</title>
      </Head>

      <TopBar />
      <Flex paddingTop="calc(33px + 1rem)" w="100vw">
        <Container maxW="container.sm">
          <Main allPostsData={allPostsData} />
        </Container>
      </Flex>
    </>
  );
}

type PostData = {
  id: string;
  date: string;
  title: string;
};

type MultiplePostsData = {
  a: PostData[];
};

const Main = ({
  allPostsData,
}: {
  allPostsData: { id: string; date: string; title: string }[];
}) => {
  return (
    <Flex mt="1em" align="left" display={"block"}>
      <Heading as="h2">About this Blog</Heading>
      <Text
        lineHeight={1.9}
        fontFamily={`Meiryo","Yu Gothic"," "Hiragino Sans",  "sans-serif"`}
        fontSize="16px"
      >
        ふろん (@Focus_Sash)が読んだ本や見た作品の感想の記事を置きます。まだなにもないです。
      </Text>
      <Heading as="h2">Sample Posts</Heading>
      {allPostsData.map((postData, index, array) => {
        return (
          <NextLink href={`posts/${postData.id}`} passHref key={postData.id}>
            <Link display="block" fontSize={"20px"} _focus={{ boxShadow: "none" }}>{postData.title}</Link>
          </NextLink>
        );
      })}
      <Heading>
        Todo
      </Heading>
      <UnorderedList>
        <ListItem>記事を書く</ListItem>
        <ListItem>このページのレイアウトを整える</ListItem>
      </UnorderedList>
    </Flex>
  );
};