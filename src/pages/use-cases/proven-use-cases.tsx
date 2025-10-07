import React, { useState } from 'react';
import Layout from '@theme/Layout';
import VideoShowcase from '@site/src/components/features/VideoShowcase/VideoShowcase';
import { VideoItem } from '@site/src/types/components';
import styles from './proven-use-cases.module.css';

const companyLogos = [
  { src: '/img/poweredby/logos/microsoft.svg', alt: 'Microsoft' },
  { src: '/img/poweredby/logos/netflix.svg', alt: 'Netflix' },
  { src: '/img/poweredby/logos/apple.png', alt: 'Apple' },
  { src: '/img/poweredby/logos/yahoo.svg', alt: 'Yahoo' },
  { src: '/img/poweredby/logos/bloomberg.svg', alt: 'Bloomberg' },
  { src: '/img/poweredby/logos/paypal.svg', alt: 'PayPal' },
  { src: '/img/poweredby/logos/banco-do-brasil.svg', alt: 'Banco do Brasil' },
];

const industries = [
  'eCommerce',
  'Pharma & Healthcare',
  'Financial Services',
  'Internet of things',
  'Logistics & Transportation',
  'Retail',
  'Leisure & Hospitality',
  'Entertainment',
  'Defense',
  'Gaming',
  'Biotech',
  'Software & SaaS',
  'Telecommunications',
];

const featuredVideos: VideoItem[] = [
  {
    id: '1',
    title: 'Leveraging In-Memory Compute Grids With Core Systems Of Record',
    thumbnail: '/img/poweredby/videos/001.png',
    videoUrl: 'https://www.youtube.com/watch?v=3FFexcYIpmA',
    company: 'IBM',
    description: 'Apache Ignite based platform is used for IBM Z Mainframes workload acceleration.',
  },
  {
    id: '2',
    title: 'Real-time Data Access with Apache Ignite SQL',
    thumbnail: '/img/poweredby/videos/bloomberg.jpg',
    videoUrl: 'https://youtu.be/3w0H3zLH594',
    company: 'Bloomberg',
    description: "Apache Ignite is a key component of Bloomberg's portfolio management system. From this talk you will learn how the finance industry's ever-increasing need to process large datasets in real-time led Bloomberg's engineers to select Ignite to deliver persistence, caching, and integrated compute.",
  },
  {
    id: '3',
    title: 'Improving the CERN Control and Monitoring Platform (C2MON) with Apache Ignite',
    thumbnail: '/img/poweredby/videos/cern.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=BSGFL72u2iY',
    company: 'CERN',
    description: "The CERN Control and Monitoring platform (C2MON) is an open-source platform for industrial controls data acquisition, monitoring, control, and data publishing. For C2MON the existing legacy was replaced with caching framework with Apache Ignite. It improves C2MON's scalability and enables it to handle high volumes of data.",
  },
  {
    id: '4',
    title: 'Building A Live Geospatial Analytics Platform For Construction Productivity With Apache Ignite',
    thumbnail: '/img/poweredby/videos/013.png',
    videoUrl: 'https://www.youtube.com/watch?v=KLnvIiwAl2o',
    company: 'Trimble',
    description: 'Trimble built a live geospatial analytics platform for construction productivity with Apache Ignite. Apache Ignite forms a key infrastructural component of the TRex platform. It supports the real-time ingestion of data from the field, along with OLTP-style analytics and queries against that data, such as thematic tiling, volumes & cut/fill calculations, spatial profiling, etc.',
  },
  {
    id: '5',
    title: 'Ignite: Quant Revolution',
    thumbnail: '/img/poweredby/videos/cardano.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=WLPv_2sKRRw',
    company: 'Cardano',
    description: "Quantitative analytics usually requires combining a calculation methodology with data in the form of software. Traditionally, the first two components have been on the main stage, but software was never the main actor. Cardano Risk management's solution is to build a firsthand, scalable, high-performance system with Apache Ignite.",
  },
  {
    id: '6',
    title: '"Recent Purchases" With Apache Ignite',
    thumbnail: '/img/poweredby/videos/004.png',
    videoUrl: 'https://techblog.yahoo.co.jp/oss/yahoo_shopping_purchases_ignite/',
    company: 'Yahoo! Japan',
    description: 'This blog post explains why Yahoo! Japan chose Apache Ignite for a highly scalable caching system that can process tens of thousands of requests per second.',
  },
  {
    id: '7',
    title: 'In-Memory Computing Patterns For High Volume, Real Time Applications',
    thumbnail: '/img/poweredby/videos/005.png',
    videoUrl: 'https://www.youtube.com/watch?v=ZZI7MVE1ZBo&t=2s',
    company: 'American Airlines',
    description: "American Airlines' IT transformations are due to the following advantages of Apache Ignite based platform: Improvement in bandwidth and response times, improved availability, horizontal and vertically scalability, efficiency, ANSI-99 SQL and ACID transaction guarantees.",
  },
  {
    id: '8',
    title: 'Embracing The Service Consumption Shift In Banking',
    thumbnail: '/img/poweredby/videos/006.png',
    videoUrl: 'https://www.youtube.com/watch?v=CPmwnjDJ1Sk',
    company: 'ING Bank',
    description: 'ING core banking system transformation using an Apache Ignite-based platform.',
  },
  {
    id: '9',
    title: 'Using Ignite And JBoss Drools To Implement A Complex Event Processing Solution',
    thumbnail: '/img/poweredby/videos/007.png',
    videoUrl: 'https://www.youtube.com/watch?v=g1FcrOPXWyg',
    company: 'Banco do Brasil',
    description: 'Banco do Brasil is developing the omnichannel Horus platform in-house. They implemented a complex event processing ecosystem that is based on Apache Ignite, JBoss Drools, and other components. The team also built microservices and interface applications, both event-driven.',
  },
  {
    id: '10',
    title: 'Fitness + In Memory Computing = Getting Ahead Of The Game',
    thumbnail: '/img/poweredby/videos/008.png',
    videoUrl: 'https://www.youtube.com/watch?v=EdFOKJIjRSg',
    company: '24 Hour Fitness',
    description: 'Apache Ignite based platform is used as a digital integration hub and database for a variety of 24 Hour Fitness services.',
  },
];

const additionalVideos: VideoItem[] = [
  {
    id: '11',
    title: 'What We Learned Supporting 1M RPM with 10 MS Latency Using Apache Ignite at iFood',
    thumbnail: '/img/poweredby/videos/ifood.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=luEYsfZAYOU',
    company: 'iFood',
    description: 'iFood is the largest Food Tech in Latin America, with more than 300k stores in more than 1700 cities in Brazil and Colombia. The platform is now processing more than 65 million orders per month, which translates to more than 500M events being delivered to external agents (user devices and integrations). Apache Ignite allows to support an average throughput of 1M rpm with p99 at less than 10ms of latency.',
  },
  {
    id: '12',
    title: 'How nference.ai Leverages Ignite For Distributed Analytics In The Bioinformatics Domain',
    thumbnail: '/img/poweredby/videos/012.png',
    videoUrl: 'https://www.youtube.com/watch?v=NUxdoL-K9Ys',
    company: 'nference.ai',
    description: 'nference.ai uses Ignite for distributed analytics in the bioinformatics domain. Ignite, as a horizontally scalable framework, allows for the defining of different statistical analyses, and the execution of it on TBs of numerical data in real time, without movement of data.',
  },
  {
    id: '13',
    title: 'High Performance Exposure Management With Apache Ignite',
    thumbnail: '/img/poweredby/videos/009.png',
    videoUrl: 'https://www.youtube.com/watch?v=jF9T2cJB6t0',
    company: 'JPMorgan Chase',
    description: 'Exposure management poses unique technical challenges for Asset Management. Requests involve heavy computation on top of millions of data points with target response times of around a 1/3 second. This challenge was solved using an Apache Ignite-based platform.',
  },
  {
    id: '14',
    title: 'Real Time Exposure Management Using Ignite',
    thumbnail: '/img/poweredby/videos/009.png',
    videoUrl: 'https://www.youtube.com/watch?v=B8A8yR_e6VM',
    company: 'JPMorgan Chase',
    description: "The increasing need in the finance world to apply transformations to large datasets in real time led the Asset Management's portfolio management system team to select Ignite to achieve persistence, caching and integrated compute.",
  },
  {
    id: '15',
    title: 'Lightning Fast Flight Searches on Expedia Using Apache Ignite',
    thumbnail: '/img/poweredby/videos/expedia.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=n8SRNf_mO_U',
    company: 'Expedia',
    description: 'Flight searches on the Expedia platform are executed on a read-heavy system with peak search traffic regularly in the range of thousands of transactions per second, so caching is a natural requirement. Moving the caching layer to Apache Ignite Expedia made the flight search 10x faster using off-heap reads, server-side computing, binary objects, and affinity collocation.',
  },
  {
    id: '16',
    title: 'Ignite Success Story: How Ignite Fuels The High Throughput Messaging In Sentienz Akiro',
    thumbnail: '/img/poweredby/videos/014.png',
    videoUrl: 'https://www.youtube.com/watch?v=_mnZQ3JDcn8',
    company: 'Sentienz',
    description: 'Sentienz uses Apache Ignite to handle more than a million requests per second from 10 Million devices with a single cluster IoT platform.',
  },
  {
    id: '17',
    title: "Processing Komodo Health's Data with Apache Ignite in AWS",
    thumbnail: '/img/poweredby/videos/komodo.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=mfZ8VOL6XSE',
    company: 'KomodoHealth',
    description: 'KomodoHealth is using Apache Ignite to facilitate the processing of healthcare data.',
  },
  {
    id: '18',
    title: 'Building A Graph Centric Platform On Ignite',
    thumbnail: '/img/poweredby/videos/019.png',
    videoUrl: 'https://www.youtube.com/watch?v=GoXBevB9iKA',
    company: 'Hypi',
    description: 'Apache Ignite as a graph centric platform.',
  },
  {
    id: '19',
    title: 'Data Management in the IoT with Apache Ignite',
    thumbnail: '/img/poweredby/videos/psc.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=B7yRPl56xAM',
    company: 'Transition Technologies PSC',
    description: 'Apache Ignite plays a major role in ThingWorx, the enterprise IoT platform from PTC. A distributed cache helps keep data synchronized in clustered environments. Distributed computation gives insight into the value that hides in the data.',
  },
  {
    id: '20',
    title: 'Building serverless reactive systems using Apache Ignite',
    thumbnail: '/img/poweredby/videos/kubo.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=eRzX1Rd7T7I',
    company: 'Kubo',
    description: 'Apache Ignite has powerful in-memory, distributed computing capabilities that can be used as a foundation of building various programming models.',
  },
  {
    id: '21',
    title: 'Detecting Potentially Hazardous Situations In Dutch Railway Planning Using Apache Ignite',
    thumbnail: '/img/poweredby/videos/024.png',
    videoUrl: 'https://www.youtube.com/watch?v=wkCW8YC8eKU',
    company: 'Dutch Railways',
    description: 'Detecting potentially hazardous situations in Dutch railway planning to meet the challenges of one of the busiest rail infrastructures in Europe. JDriven built a space-based architecture with Apache Ignite.',
  },
  {
    id: '22',
    title: 'Using Apache Ignite As A Part Of Real Time Campaigning',
    thumbnail: '/img/poweredby/videos/003.png',
    videoUrl: 'https://www.youtube.com/watch?v=z28rthKIrDk',
    company: 'Teradata',
    description: 'Apache Ignite usage for handling real time marketing campaigns.',
  },
];

export default function ProvenUseCases(): JSX.Element {
  const [showMore, setShowMore] = useState(false);

  return (
    <Layout
      title="Proven Business Cases - Apache Ignite in Use"
      description="All publicly disclosed business cases of Apache Ignite. Explore dozens of Ignite case-studies across various industries."
    >
      <div className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Apache Ignite Is Chosen
            <br />
            By Leading Companies
            <br />
            Across The World
          </h1>
          <div className={styles.logoGrid}>
            {companyLogos.map((logo, idx) => (
              <div key={idx} className={styles.logoItem}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="container">
        <h2 className="h3">Explore Featured Stories</h2>
        <p className={`${styles.subtitle} h5`}>
          You can find dozens of Apache Ignite case-studies across various industries:
        </p>
        <div className={styles.industryGrid}>
          {industries.map((industry, idx) => (
            <div key={idx} className={styles.industryItem}>
              {industry}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.callToAction}>
        <div className="container">
          <div className={styles.ctaContent}>
            <div>
              <h3 className="h4">
                <strong>Do you have an Apache Ignite use-case to share?</strong>
              </h3>
              <p className={styles.ctaText}>
                Reach out to us on the <em>dev mailing list</em> and we'll add it to this page
              </p>
              <p className={styles.contactInfo}>
                Send an email to: <strong>dev-subscribe@ignite.apache.org</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <VideoShowcase videos={featuredVideos} />

        {showMore && (
          <div className={styles.moreVideos}>
            <VideoShowcase videos={additionalVideos} />
          </div>
        )}

        <div className={styles.loadMoreWrapper}>
          <button
            className={styles.loadMoreButton}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Load more stories'}
          </button>
        </div>
      </section>
    </Layout>
  );
}
