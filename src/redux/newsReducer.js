let initialState = {
  news: [
    {id: 1,
    image: 'https://gdb.voanews.com/8FB6BBD4-839E-4FAF-A728-985A2D04DB5D_cx0_cy3_cw0_w1023_r1_s.png',
    title: 'US Company Shows Off New Supersonic Test Aircraft', content: `An American startup company recently gave reporters a chance to see its first demonstrator aircraft, which is set to begin flight testing next year.
The tests will be an important milestone for the company. It has plans to develop a passenger airplane that can travel faster than the speed of sound.`},
    {id: 2, 
    image: 'https://gdb.voanews.com/500BCF6E-4CDC-4A39-9155-B9BAF8EA263A_w1023_r1_s.jpg',
    title: 'Earth Lost Big Part of Atmosphere to Moon', content: `A new study suggests Earth could have lost up to 60 percent of its atmosphere in the collision of space objects that created the moon.
Most scientists believe this event happened about 4 billion years ago when Earth was still developing. They think a massive object, possibly the size of the planet Mars, hit the Earth, sending vaporized particles into space. Gravity is believed to have brought these particles together to form the moon.`},
    {id: 3,
    image: 'https://gdb.voanews.com/EC98B477-5946-40DC-8881-C147835F6DF1_cx0_cy8_cw0_w1023_r1_s.png', 
    title: 'Tasmanian Devils Return to Australia Mainland after 3,000 Years', content: `Tasmanian devils have been returned to the Australian mainland 3,000 years after the animals died off there.
The mainland population is believed to have been partly killed off by a group of dingoes – wild dogs native to the continent. Experts say other causes of extinction could include a rise in the native human population and extremely dry weather.`}
  ]
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default newsReducer;
