interface Navigation {
  label: string,
  link: string
};

const useNavigations = () => {
  const navigations: Array<Navigation> = [
    {
      label: 'Agents',
      link: '/agents'
    },
    {
      label: 'Weapons',
      link: '/weapons'
    },
    {
      label: 'Maps',
      link: '/maps'
    }
  ];

  return { navigations };
}

export default useNavigations;