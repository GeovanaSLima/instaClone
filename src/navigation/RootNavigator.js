import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainTabNavigator from "./MainTabNavigator";


export default function RootNavigator() {
    return(
        <NavigationContainer>
            <MainTabNavigator />
        </NavigationContainer>
    );
}