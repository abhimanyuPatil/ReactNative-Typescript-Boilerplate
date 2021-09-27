import { useCallback, useState } from "react"

const handleNeomorphicPress = () => {
    const [isDown, setDown] = useState(false);
    const handlePressIn = useCallback(() => {
        setDown(true);
      }, [setDown]);
      const handlePressOut = useCallback(() => {
        setDown(false);
      }, [setDown]);
    return {isDown,handlePressIn,handlePressOut}
}
export default handleNeomorphicPress;