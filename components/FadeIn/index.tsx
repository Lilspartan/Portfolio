import { useState, useEffect, useRef } from 'react'

const FadeIn = (props) => {
    const [isVisible, setVisible] = useState(true);

    const ref = useRef();
    
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      
      observer.observe(ref.current);
      
      return () => observer.unobserve(ref.current);
    }, []);

    return (
      <div
        className = {`fade-in-element ${isVisible ? 'fade-is-visible' : ''}`}
        ref={ref}
      >
        {props.children}
      </div>
    );
}

export default FadeIn