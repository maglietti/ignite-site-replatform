/**
 * Events Page - Apache Ignite
 * Displays Apache Ignite Summit, meetups, upcoming and past events
 */

import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './events.module.css';

// Event data types
interface Event {
  date: string;
  day: string;
  month: string;
  year: string;
  title: string;
  description?: string;
  speaker: string[];
  location: string;
  link: string;
  eventLogo?: string;
}

interface MeetupCity {
  city: string;
  country: string;
  flag: string;
  link: string;
}

// Sample upcoming events data
const upcomingEvents: Event[] = [
  {
    date: 'October 8, 2023',
    day: '8',
    month: 'OCTOBER',
    year: '2023',
    title: 'Scalable Distributed Computing with Groovy Using Apache Ignite',
    speaker: ['Jeremy Meyer'],
    location: 'Halifax, Canada',
    link: 'https://communityovercode.org/schedule-list/#GR008',
    eventLogo: 'Community Over Code'
  },
  {
    date: 'October 8, 2023',
    day: '8',
    month: 'OCTOBER',
    year: '2023',
    title: 'Whiskey Clustering with Apache Groovy and Apache Ignite',
    speaker: ['Paul King'],
    location: 'Halifax, Canada',
    link: 'https://communityovercode.org/schedule-list/#GR007',
    eventLogo: 'Community Over Code'
  },
  {
    date: 'October 9, 2023',
    day: '9',
    month: 'OCTOBER',
    year: '2023',
    title: 'Enhancing Apache Ignite 3.0 with the Power of Open-Source',
    speaker: ['Stanislav Lukyanov'],
    location: 'Halifax, Canada',
    link: 'https://communityovercode.org/schedule-list/#BDC006',
    eventLogo: 'Community Over Code'
  }
];

// Meetup cities data
const meetupCities: MeetupCity[] = [
  {
    city: 'London',
    country: 'Apache Ignite Meetup',
    flag: '/img/events/flag-uk.svg',
    link: 'https://www.meetup.com/Apache-Ignite-London/'
  },
  {
    city: 'St.Petersburg',
    country: 'Apache Ignite Meetup',
    flag: '/img/events/flag-ru.svg',
    link: 'https://www.meetup.com/St-Petersburg-Apache-Ignite-Meetup/'
  },
  {
    city: 'Moscow',
    country: 'Apache Ignite Meetup',
    flag: '/img/events/flag-ru.svg',
    link: 'https://www.meetup.com/Moscow-Apache-Ignite-Meetup/'
  }
];

// Past events by year
const pastEventsByYear: Record<string, Event[]> = {
  '2022': [
    {
      date: 'December 15, 2022',
      day: '15',
      month: 'DECEMBER',
      year: '2022',
      title: 'How did we build rebalance into the distributed database architecture',
      speaker: ['Vlad Pyatkov'],
      location: 'Yerevan, Armenia',
      link: 'https://highload.am/2022/abstracts/9687'
    },
    {
      date: 'December 15, 2022',
      day: '15',
      month: 'DECEMBER',
      year: '2022',
      title: 'Practical aspects of B+ trees',
      speaker: ['Nikolay Izhikov'],
      location: 'Yerevan, Armenia',
      link: 'https://highload.am/2022/abstracts/9677'
    },
    {
      date: 'June 16, 2022',
      day: '16',
      month: 'JUNE',
      year: '2022',
      title: 'How to write a high-performance database driver',
      speaker: ['Pavel Tupitsyn'],
      location: 'Online event',
      link: 'https://dotnext.ru/'
    },
    {
      date: 'May 13, 2022',
      day: '13',
      month: 'MAY',
      year: '2022',
      title: 'Rebalancing in a distributed database. How to catch up with the state of the node to the state of the cluster?',
      speaker: ['Vlad Pyatkov'],
      location: 'Moscow, Russia',
      link: 'https://www.highload.ru/foundation/2022/abstracts/7989'
    },
    {
      date: 'February 16, 2022',
      day: '16',
      month: 'FEBRUARY',
      year: '2022',
      title: 'Apache Ignite Community Gathering: Ignite 3 Alpha 4',
      speaker: ['Maxim Timonin', 'Val Kulichenko', 'Alexey Scherbakov'],
      location: 'Online event',
      link: 'https://www.meetup.com/Apache-Ignite-Virtual-Meetup/events/283606359'
    }
  ],
  '2021': [
    {
      date: 'November 15, 2021',
      day: '15',
      month: 'NOVEMBER',
      year: '2021',
      title: 'Apache Ignite Virtual Meetup: Ignite 3 Alpha Release',
      speaker: ['Val Kulichenko'],
      location: 'Online event',
      link: 'https://www.meetup.com/Apache-Ignite-Virtual-Meetup/'
    }
  ]
};

// Event card component
const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <article className={styles.eventcard}>
    <div className={styles.eventcard__date}>{event.date}</div>
    <div className={styles.eventcard__title}>{event.title}</div>
    <div className={styles.eventcard__info}>
      <div className={styles.eventcard__speaker}>
        {event.speaker.map((speaker, idx) => (
          <span key={idx}>{speaker}</span>
        ))}
      </div>
      <div className={styles.eventcard__loc}>{event.location}</div>
    </div>
    <a
      href={event.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`button button--shadow ${styles.eventcard__button}`}
    >
      Learn more details
    </a>
  </article>
);

// Upcoming event item component
const UpcomingEventItem: React.FC<{ event: Event }> = ({ event }) => (
  <article className={styles.eventcomingitem}>
    <div className={styles.eventcomingitem__left}>
      <p className={styles.eventcomingitem__num}>{event.day}</p>
      <p className={styles.eventcomingitem__month}>{event.month}</p>
      <p className={styles.eventcomingitem__year}>{event.year}</p>
    </div>
    <div className={styles.eventcomingitem__main}>
      <p className={styles.eventcomingitem__title}>{event.title}</p>
      {event.description && (
        <p className={styles.eventcomingitem__descr}>{event.description}</p>
      )}
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.eventcomingitem__more}
      >
        Learn more details
      </a>
    </div>
    <div className={styles.eventcomingitem__right}>
      <div className={styles.eventcomingitem__mic}>
        <div className={styles.eventcomingitem__speaker}>
          {event.speaker.join(', ')}
        </div>
      </div>
      <div className={styles.eventcomingitem__loc}>
        {event.eventLogo && (
          <div className={styles.eventcomingitem__loctitle}>{event.eventLogo}</div>
        )}
        <div className={styles.eventcomingitem__address}>{event.location}</div>
      </div>
    </div>
  </article>
);

export default function Events(): JSX.Element {
  const [activeYear, setActiveYear] = useState('2022');
  const [showMoreEvents, setShowMoreEvents] = useState<Record<string, boolean>>({});

  const toggleShowMore = (year: string) => {
    setShowMoreEvents(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const years = Object.keys(pastEventsByYear);

  return (
    <Layout
      title="Apache Ignite Events - Meetups, Summit, Conference"
      description="Join our upcoming events: in-memory computing meetups, Apache Ignite summits or conferences. Find an Apache Ignite meetup/group near you."
    >
      {/* Hero Section */}
      <section className={styles.eventhero}>
        <div className="container">
          <div className={styles.eventhero__main}>
            <h1 className="h2">
              Join The Apache Ignite <br />
              Community At Conferences, <br />
              Summits And Other Events
            </h1>
            <div className="h5 pt-3">
              The community meets online and offline regularly. <br />
              Join our meetup groups and events to learn from <br />
              Ignite experts or to share your Ignite experience.
            </div>
          </div>
          <img
            className={styles.eventhero__img}
            src="/img/events/b1-mainpic.svg"
            alt="Join the Apache Ignite Community at Conferences, Summits and Other Events"
          />
        </div>
      </section>

      {/* Navigation Block */}
      <section className={styles.cmtynavblock}>
        <div className="container">
          <ul className={styles.cmtynavblock__list}>
            <li>
              <a className={styles.cmtynavblock__active} href="#summit">
                Ignite Summit
              </a>
            </li>
            <li>
              <a href="#meetups">Meetups Worldwide</a>
            </li>
            <li>
              <a href="#upcoming">Upcoming Events</a>
            </li>
            <li>
              <a href="#past">Past Events</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Featured Event */}
      <section className={`${styles.eventFeatured} container`}>
        <p className="capstext">Featured Event</p>
        <a
          href="https://ignite-summit.org/2025/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.eventFeatured__banner}
        >
          <picture>
            <source
              srcSet="/images/promos/ignite-Summit-call-for-speakers.png"
              media="(max-width: 767px)"
            />
            <img
              src="/images/promos/ignite-Summit-call-for-speakers.png"
              alt="Ignite Summit call for speakers"
            />
          </picture>
        </a>
      </section>

      {/* Ignite Summit Section */}
      <section id="summit" className={`${styles.evsummit} container`}>
        <div className={styles.evsummit__info}>
          <div className={styles.evsummit__logo}>
            <img src="/img/events/ignite-summit-logo.svg" alt="Apache Ignite Summit" />
          </div>
          <div className={styles.evsummit__descr}>
            <h2 className="h3">Apache Ignite Summit</h2>
            <p className="h5 pt-2">
              This virtual conference will feature speakers from industry-leading companies <br />
              and hundreds of participants from all over the world.
            </p>
          </div>
        </div>
        <div className={styles.evsummit__twobanners}>
          <a
            href="https://ignite-summit.org/2025/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.evsummit__twobannerslink}
          >
            <img src="/img/events/banner-bott-7.png" alt="Ignite Summit 2025" />
          </a>
          <a
            href="https://ignite-summit.org/2023-june/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.evsummit__twobannerslink}
          >
            <img src="/img/events/banner-bott-5.jpg" alt="Ignite Summit June 2023" />
          </a>
          <a
            href="https://ignite-summit.org/2022-november/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.evsummit__twobannerslink}
          >
            <img src="/img/events/banner-bott-4.jpg" alt="Ignite Summit November 2022" />
          </a>
          <a
            href="https://ignite-summit.org/2022-june/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.evsummit__twobannerslink}
          >
            <img src="/img/events/banner-bott-3.jpg" alt="Ignite Summit June 2022" />
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLMc7NR20hA-JvgLWtvp2R9tEnD5vlp9l0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.evsummit__twobannerslink}
          >
            <img src="/img/events/banner-bott-1.jpg" alt="Watch Summit Videos" />
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLMc7NR20hA-KF8c_hVICKpzKnWkjzfC2V"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.evsummit__twobannerslink}
          >
            <img src="/img/events/banner-bott-2.jpg" alt="Watch Summit Videos" />
          </a>
        </div>
      </section>

      {/* Meetups Worldwide */}
      <section id="meetups" className={styles.eventPlanet}>
        <div className="container">
          <div className={styles.eventPlanet__wrap}>
            <div className={styles.eventPlanet__main}>
              <h2 className="h3 pb-1">Apache Ignite Meetups Worldwide</h2>
              <p className="h5 pt-5">
                Meet the community - developers, experts, and practitioners - face-to-face, virtually, or onsite in your city.
              </p>
            </div>
            <div className={styles.eventPlanet__pic}>
              <img src="/img/events/b4-world.svg" alt="Worldwide Meetups" />
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Meetup */}
      <section id="virtual" className={`${styles.eventVirtual} container`}>
        <div className={styles.eventvirt}>
          <div className={styles.eventvirt__left}>
            <h3 className="h4">Virtual Apache Ignite Meetup</h3>
            <p className="pt-2">
              Join Ignite users, developers, committers, contributors, and architects from all over the world and get access to the online talks and presentations by Apache Ignite experts and practitioners.
            </p>
          </div>
          <div className={styles.eventvirt__right}>
            <a
              className="button"
              href="https://www.meetup.com/Apache-Ignite-Virtual-Meetup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Virtual Meetup
            </a>
          </div>
        </div>

        <div className={styles.eventVirtbot}>
          <div className={styles.eventVirtbot__col}>
            <h4 className="h4">Recordings Of Past Meetups</h4>
            <p className="pt-2">
              Find a collection of past Virtual Apache Ignite Meetup <br />
              presentations, talks, and webinars.
            </p>
          </div>
          <div className={`${styles.eventVirtbot__col} ${styles.eventVirtbot__colLong}`}>
            <h4 className="h4">Upcoming Virtual Meetup</h4>
            <div className={styles.eventDynamicsect}>
              <h3 className="fz20">
                Join our group and don't <br />
                miss an upcoming virtual event
              </h3>
            </div>
          </div>
          <div className={styles.eventVirtbot__col}>
            <div className={styles.eventRecording}>
              <a
                href="https://www.youtube.com/watch?v=f2ArcJPH4iU&list=PLMc7NR20hA-LQ0GR1QW5SDQflMOuPUqDQ&index=1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.eventRecorditem}
              >
                <img
                  className={styles.eventRecpic}
                  src="https://img.youtube.com/vi/f2ArcJPH4iU/maxresdefault.jpg"
                  alt="Virtual Meetup Recording"
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=lCiZ3x8IRvI&list=PLMc7NR20hA-LQ0GR1QW5SDQflMOuPUqDQ&index=2"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.eventRecorditem}
              >
                <img
                  className={styles.eventRecpic}
                  src="https://img.youtube.com/vi/lCiZ3x8IRvI/maxresdefault.jpg"
                  alt="Virtual Meetup Recording"
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=7UjENQBFvIQ&list=PLMc7NR20hA-LQ0GR1QW5SDQflMOuPUqDQ&index=3"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.eventRecorditem}
              >
                <img
                  className={styles.eventRecpic}
                  src="https://img.youtube.com/vi/7UjENQBFvIQ/maxresdefault.jpg"
                  alt="Virtual Meetup Recording"
                />
              </a>
            </div>
            <a
              className={`button button--shadow ${styles.eventRecbutton}`}
              href="https://www.youtube.com/playlist?list=PLMc7NR20hA-LQ0GR1QW5SDQflMOuPUqDQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.71423 4.99993L0.142805 9.94865L0.142805 0.0512134L8.71423 4.99993Z"/>
                </svg>
              </i>
              <span>Watch Virtual Meetup videos</span>
            </a>
          </div>
          <div className={styles.eventVirtbot__col}>
            <img
              className={styles.eventDynamicsect__pic}
              src="/img/events/logo-meetup.svg"
              alt="Meetup Logo"
            />
            <a
              className={`button button--shadow ${styles.eventRecmorebutton}`}
              href="https://www.meetup.com/Apache-Ignite-Virtual-Meetup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Meetups in Your City */}
      <section className={`${styles.eventyoucity} container`}>
        <h2 className="h4">Apache Ignite Meetups In Your City</h2>
        <div className={styles.eventyoucity__wrap}>
          {meetupCities.map((city, idx) => (
            <article key={idx} className={styles.eventyoucity__item}>
              <div className={styles.eventyoucity__icon}>
                <img src={city.flag} alt={city.city} />
              </div>
              <div className={`${styles.eventyoucity__town} h5`}>
                <strong>{city.city}</strong>
                <span>{city.country}</span>
              </div>
              <div className={styles.eventyoucity__action}>
                <a
                  className="button button--shadow"
                  href={city.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/img/events/icon-plus.svg" alt="" />
                  <span>Join</span>
                </a>
              </div>
            </article>
          ))}
          <article className={styles.eventyoucity__last}>
            <p className="fz20 pb-3">Start an onsite Apache Ignite Meetup in your city.</p>
            <small>Take the first step.</small>
            <small>
              Send us a note to <br />
              <a href="mailto:dev@ignite.apache.org">dev@ignite.apache.org</a> <br />
              and we'll see what can be done.
            </small>
          </article>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className={`${styles.eventupcoming} container`}>
        <div className="capstext pb-1">Upcoming Events Schedule</div>
        <div className={styles.eventupcoming__wrap}>
          <h2 className="h4 pb-4">Offline events ({upcomingEvents.length})</h2>
          {upcomingEvents.map((event, idx) => (
            <UpcomingEventItem key={idx} event={event} />
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section id="past" className={`${styles.eventspast} container`}>
        <h3 className="capstext pb-5">Past Events</h3>
        <div className={styles.eventspast__tablinks}>
          {years.map(year => (
            <button
              key={year}
              className={`${styles.eventpast__link} ${activeYear === year ? styles.active : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <div className={styles.eventspast__tabs}>
          {years.map(year => (
            <div
              key={year}
              className={`${styles.eventspast__tabwrap} ${activeYear === year ? styles.active : ''}`}
            >
              <div className={styles.eventspast__tab}>
                {pastEventsByYear[year].slice(0, 3).map((event, idx) => (
                  <EventCard key={idx} event={event} />
                ))}
              </div>
              {pastEventsByYear[year].length > 3 && (
                <>
                  <div
                    className={styles.eventspast__morewrap}
                    style={{ height: showMoreEvents[year] ? 'auto' : '0' }}
                  >
                    <div className={styles.eventspast__tab}>
                      {pastEventsByYear[year].slice(3).map((event, idx) => (
                        <EventCard key={idx} event={event} />
                      ))}
                    </div>
                  </div>
                  <div className={styles.eventspast__bottom}>
                    <button
                      className={styles.eventspast__more}
                      onClick={() => toggleShowMore(year)}
                    >
                      {showMoreEvents[year] ? 'Show less' : 'Show more'}
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
