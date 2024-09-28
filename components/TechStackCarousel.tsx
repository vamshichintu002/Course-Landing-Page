import React from 'react';
import Image from 'next/image';
import styles from './TechStackCarousel.module.css';

interface TechItem {
  name: string;
  image: string;
}

const techStack: TechItem[] = [
  { name: 'Python', image: 'https://framerusercontent.com/images/0o4Du98LTVb8qeJyJ90MSf99pFA.svg' },
  { name: 'Vercel', image: 'https://static.wikia.nocookie.net/logopedia/images/a/a7/Vercel_favicon.svg' }, // Added missing opening brace and comma
  { name: 'Github', image: 'https://framerusercontent.com/images/gfEI3lfcgCNk5dvf6qyeLMQli5o.png' },
  { name: 'Google Collab', image: 'https://framerusercontent.com/images/DQSXlQnV5BdBGpNlMPSeBwuv6Hk.svg' },
{ name: 'Clerk', image: '' },
  { name: 'Huggingface', image: 'https://framerusercontent.com/images/32sjGvLEvHnMbbl5L9DcjqRck.png' },
  { name: 'OpenAI API', image: 'https://framerusercontent.com/images/LcL1rY81eu4qeBUeA69bBuzh1c.svg' },

];

const TechStackCarousel: React.FC = () => {
  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>What will you master?</h2>
      <p className={styles.subtitle}>
        Through these tools and frameworks, learn the most important skill - to think like an engineer!
      </p>
      <div className={styles.carousel}>
        {techStack.map((tech, index) => (
          <div key={index} className={styles.techItem}>
            <Image src={tech.image} alt={tech.name} width={100} height={100} />
            <p>&gt; {tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCarousel;