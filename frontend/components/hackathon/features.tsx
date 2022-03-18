import featuresHome from "../../data/featuresHome";
import Image from "next/image";
import { Grid, Text, Spacer } from "@nextui-org/react";
import featStyle from "./features.module.css";
const Features = () => {
  return (
    <>
    <Spacer/><Spacer/>
      {featuresHome.map((feature, index) => {
        return (
          <div key={index}>
          <Grid.Container
            gap={1}
            justify="center"
            alignItems="center"
            direction={feature.layout}
          >
            <Grid xs={8} sm={4}>
              <Image src={feature.image} alt={feature.title} />
            </Grid>
            <Grid xs={10} sm={4} direction="column">
              <Text
                h3
                size="2rem"
                weight="bold"
                className={featStyle.title}
                css={{
                  textGradient: "45deg, #fa222a -10%, #38acfe 70%",
                }}
              >
                {feature.title}
              </Text>
              <ul>
                {feature.description.map((desc, index) => {
                  return <li className={featStyle.listItem}>{desc}</li>;
                })}
              </ul>
            </Grid>

          </Grid.Container>
                      <Spacer />
            <Spacer />
            </div>
        );
        })}
      
    </>
  );
};
export default Features;
