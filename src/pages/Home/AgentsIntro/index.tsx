import valorantAgents from '@images/valorant-agents.png';
import React from 'react';

import Wrapper from '@layouts/Wrapper';
import Title from '@common/Title';

const AgentsIntro: React.FC = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center"
    >
      <div className="w-full">
        <Title
          label="Play With Your Favorite Agents"
        />
        <Wrapper>
          <div className="flex justify-around items-center">
            <img
              className="w-[532px] h-[259px] object-cover"
              src={valorantAgents}
              alt="Valorant Agents"
            />
            <div>
              <p className="text-[20px] w-[470px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper eu orci odio in. Non dolor mattis at faucibus arcu rutrum. Magnis phasellus faucibus aliquet potenti luctus aliquet velit consequat. Sit tortor mauris sit ut risus morbi ac. In molestie gravida malesuada ornare viverra fermentum lobortis.
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}

export default AgentsIntro;