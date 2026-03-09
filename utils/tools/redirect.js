 const handleRedirect = (sectionRef) => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  export default handleRedirect;