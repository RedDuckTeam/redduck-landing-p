export interface RoadmapItem {
  title: string;
  description: React.ReactNode;
}

export const ROADMAP_DATA: RoadmapItem[] = [
  {
    title: 'Analysis',
    description: (
      <>
        <span>
          We don&apos;t just develop software - we help you ask the right
          questions before a single line of code is written.
        </span>
        <br />
        <br />
        <span>
          Whether it is about smart-contracts, blockchains, or overall
          architecture of your application, - we help you come to a conclusion
          on how it should look like in the first place.
        </span>
        <br />
        <br />
        <span>
          In case we come to a conclusion that an app requested to be built is
          not making sense at all - we suggest against building it on the first
          stage of software analysis.
        </span>
        <br />
        <br />
        <span>We never build what we don&apos;t believe into.</span>
      </>
    ),
  },
  {
    title: 'design',
    description: (
      <>
        <span>
          As a development partner specializing in blockchains, we engage in
          web3 design taking into account the best practices that the best web3
          projects utilize.
        </span>
        <br />
        <br />
        <ul>
          <span>The workflow looks like this:</span>
          <li>
            <span>Study the niche of the requested application</span>
          </li>
          <li>
            <span>Come to the conclusion on the design style</span>
          </li>
          <li>
            <span>Inform the client on the suggestions</span>
          </li>
          <li>
            <span>Revise until consensus is reached with the client.</span>
          </li>
          <li>
            <span>Develop the design based on the design style.</span>
          </li>
        </ul>
        <br />
        <span>
          This workflow ensures that our clients get the best possible outcome
          when designing applications with us.
        </span>
      </>
    ),
  },
  {
    title: 'development',
    description: (
      <>
        <span>
          After the team has analysed the product, together with the design
          stage we start the development stage, where the product is getting
          implemented.
        </span>
        <br />
        <br />
        <ul>
          <span>Below are our principles we use to approach this stage:</span>
          <li>
            <span>Rational by design</span>
          </li>
          <li>
            <span>Honest about trade-offs</span>
          </li>
          <li>
            <span>Built to ship fast</span>
          </li>
          <li>
            <span>Code we&apos;re not ashamed to show</span>
          </li>
        </ul>
        <br />
        <br />
        <span>
          These principles, combined with the principle of never building what
          we don&apos;t believe into - is what makes software development with
          us different.
        </span>
      </>
    ),
  },
  {
    title: 'Quality Assurance',
    description: (
      <>
        <span>
          A very important process during the software development is quality
          assurance.
        </span>
        <br />
        <br />
        <span>
          The quality assurance process verifies and validates the product by
          the means of various types of testing, such as unit, integration,
          usability and customer acceptance testing techniques.
        </span>
        <br />
        <br />
        <span>
          This ensures that we have the two most important questions covered:
        </span>
        <ul>
          <li>
            <span>Are we building the product right?</span>
          </li>
          <li>
            <span>Are we building the right product?</span>
          </li>
        </ul>
        <br />
        <span>
          Answering those questions is vital for success of a product.
        </span>
      </>
    ),
  },
  {
    title: 'Warranty period',
    description: (
      <>
        <span>
          After the product is finished and handed over, we provide our clients
          with the warranty on the product (also sometimes known as
          &apos;guarantee period&apos; or &apos;warranty period&apos;), which
          ranges from 20 to 100 business days, subject to a decision based on
          the size of the project.
        </span>
        <br />
        <br />
        <span>
          During this warranty period, any bugs or issues are resolved at no
          additional cost charged towards our client.
        </span>
        <br />
        <br />
        <span>
          This is our gesture that shows how committed we are towards success of
          our clients.
        </span>
      </>
    ),
  },
  {
    title: 'Deployment',
    description: (
      <>
        <span>
          As soon as our clients are ready for the mainnet release of their
          product, we take over the process and cover all the steps that lead to
          the successful deployment, handing over all the authority settings in
          the deployed product, if there are any.
        </span>
        <br />
        <br />
        <span>
          The goal of this process is to ensure that our clients get the ready
          product with all the permissions handed over, without diving into the
          technical details of the deployment procedures.
        </span>
      </>
    ),
  },
  {
    title: 'Maintenance',
    description: (
      <span>
        As a part of our commitment towards the success of our clients, RedDuck
        offers maintenance services that our clients can use to ensure they can
        always quickly and flexibly introduce new updates, and in an unlikely
        event of post-warranty bugs, quickly resolve such issues.
      </span>
    ),
  },
];
