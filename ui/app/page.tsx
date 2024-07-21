import MetaImg from "@/public/meta.jpg";
import Article from "@/components/Article";
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <Banner src={MetaImg} />
      <Container>
        <Article>
          <section>
            <h1>sciwork 是什麼？</h1>
            <p>
              The sciwork is a community for researchers and engineers to share
              and discuss computer code for scientific, numerical, and
              engineering work. We believe in the power of openness, and use
              open source as a means to advance software development for
              computational sciences.
            </p>
            <p>
              As information technology blending in every aspect of human
              activities, proficient use of programming languages is a
              prerequisite for conducting most research and engineering work. As
              the practitioners observed, the work evolved into a hierarchy of
              skills that take years to acquire. We need a thorough
              understanding of the problem to solve as well as the mastery of
              computer programming to deliver reliable solution. It is overly
              challenging since either of both is already complicated. Sciwork
              would like to get involved in the global effort to solve the issue
              of code development entangling with science and engineering.
            </p>
            <p>
              Our activities include but are not limited to coding sprints,
              hands-on tutorials, and technical talks and conferences (ex,
              sciwork 2023), on-line or off-line. You are welcome to join us!
            </p>
            <Button variant="action" to="https://sciwork.dev">
              前往 sciwork 官網
            </Button>
          </section>
        </Article>
      </Container>
    </>
  );
}
