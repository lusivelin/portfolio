import { Carousel } from "@mantine/carousel";
import CardComp from "@/elements/Card";

function ProjectSlider() {
  const slides = [1, 2, 3].map((item) => (
    <Carousel.Slide key={item}>
      <CardComp />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      breakpoints={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
      ]}
    >
      {slides}
    </Carousel>
  );
}

export default ProjectSlider;
