import valorantWeapons from '@images/valorant-weapons.png';
import React from 'react';

import Wrapper from '@layouts/Wrapper';
import Title from '@common/Title';

const WeaponsIntro: React.FC = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center bg-light-gray"
    >
      <div className="w-full">
        <Title
          label="Choose Your Killer Weapon"
        />
        <Wrapper>
          <div
            className="flex justify-center lg:justify-around items-center
            flex-wrap"
          >
            <img
              className="aspect-auto w-full md:w-[532px] md:h-[259px] object-cover lg:order-2"
              src={valorantWeapons}
              alt="Valorant Weapons"
            />
            <div className="mt-4 lg:mt-0 lg:order-1">
              <p className="text-[16px] md:text-[20px] md:w-[470px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper eu orci odio in. Non dolor mattis at faucibus arcu rutrum. Magnis phasellus faucibus aliquet potenti luctus aliquet velit consequat. Sit tortor mauris sit ut risus morbi ac. In molestie gravida malesuada ornare viverra fermentum lobortis.
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}

export default WeaponsIntro;