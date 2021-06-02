import React from 'react';
import {Text,StyleSheet} from 'react-native';

export default function AppText({children, size=16, color="black", fontWeight,tA}){
    return(
    <Text style={{
        fontSize:size,
        color:color,
        fontWeight:fontWeight,
        textAlign:tA,
    }}>
        {children}
    </Text>
    )
      
}

const styles = StyleSheet.create({
})