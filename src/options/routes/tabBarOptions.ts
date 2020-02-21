import { BottomTabBarOptions } from "@react-navigation/bottom-tabs";
import backgrounds from "../../styles/backgrounds";
import colors from "../../styles/colors";

const tabBarOptions: BottomTabBarOptions = {
    style:{
        backgroundColor: backgrounds.dark.tabNav.backgroundColor,
        borderTopWidth: 0
    },
    activeTintColor: colors.dark.subColor.color
};

export default tabBarOptions;