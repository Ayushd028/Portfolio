import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import Image from 'next/image';
import StyledLink from '@/components/ui/StyledLink/StyledLink';
import Skills from './Skills/Skills';
import styles from './About.module.css';
import { useState } from 'react';
import { gotham } from '@/utils/fonts';
import StyledButton from '@/components/ui/StyledButton/StyledButton';
import { Icon } from '@/components/ui/Icons';

const About = () => {

  const [expanded, setExpanded] = useState<boolean>(false);
  const toggleExpand = () => setExpanded(prev => !prev);

  return (
    <section id="about">

      <SectionHeading
        subText="Introduction"
        headText="About Me"
      />

      <div className={styles.about}>

        <div className={styles.about_text}>
          <p>
            I’m Ayush Dwivedi, currently I live in Prayagraj India,
            working as a MERN Stack Developer at <StyledLink external href='https://acciojob.com/'>AccioJob</StyledLink>.
          </p>

          <p>
          As a fresher, I’ve been exploring the world of full stack development, building live projects like an e-commerce website, a hotel booking platform, and a gym app using technologies such as React, Node.js, Express, and MongoDB. I’ve also worked with React Native and Flutter, which helped me dive into mobile development and create engaging user experiences.
          </p>

          <p>
          I enjoy experimenting with new tools and frameworks like <StyledLink external href='#'>Redux</StyledLink>, <StyledLink external href='#'>JWT</StyledLink> and <StyledLink external href='#'>MongoDB Atlas</StyledLink>, constantly expanding my technical toolkit. Currently, I’m focused on improving my backend skills, working on API development and authentication flows.
          </p>

          <p>
          Outside of coding, I enjoy playing cricket, chess, video games, and writing poetry. I’m always excited to learn from new challenges and collaborate on innovative projects, so <StyledLink href='#contact'>please feel free to reach out to me</StyledLink>.
          </p>

          <p>Here are a few technologies I’ve worked on:</p>

          <Skills expanded={expanded} />

          <StyledButton
            className={gotham.className}
            aria-label={expanded ? 'Collapse skills list' : 'Expand skills list'}
            onClick={toggleExpand}
            endIcon={<Icon name={expanded ? 'ArrowUp' : "ArrowDown"} />}
          >
            {expanded ? 'Show less' : 'Show more'}
          </StyledButton>
        </div>

        <div className={styles.about_image}>
          <div className={styles.image_wrapper}>
            <Image
              className={styles.img}
              src="/images/portfolio-pic.jpg"
              width={728}
              height={1125}
              quality={95}
              alt="Ayush Dwivedi's Picture"
              loading="lazy" // Enable lazy loading for better performance
            />
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;
