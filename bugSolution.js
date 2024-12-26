import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // Access the ref only after the component has mounted
    if (myRef.current) {
      console.log('Component mounted:', myRef.current);
      // Access component properties or methods here
    }
  }, [myRef]);

  return (
    <View>
      <Text ref={myRef}>This is my component</Text>
    </View>
  );
};

export default MyComponent;