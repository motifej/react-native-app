import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { gradientStart, gradientEnd } from '../../constants/Colors';
import { OpenSansText } from '../StyledText';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ title, goBack, goNext, next }) => (
  <LinearGradient
    colors={[gradientStart, gradientEnd]}
    style={styles.linearGradient}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    <View style={styles.inner}>
      {goBack && <Text style={styles.backButton} onPress={ () => goBack() }>
        <MaterialIcon
          name="arrow-back"
          color="#fff"
          size={34}
        />
      </Text>}

      <OpenSansText style={styles.heading}>{title}</OpenSansText>

      {goNext && <OpenSansText style={styles.nextButton} onPress={ () => goNext() }>
        {next}
      </OpenSansText>}
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  inner: {
    paddingVertical: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  linearGradient: {
    height: 215,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  heading: {
    fontSize: 36,
    color: '#fff',
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 20,
  },
  nextButton: {
    position: 'absolute',
    right: 15,
    top: 25,
    opacity: 0.75,
    fontSize: 20,
    color: '#fff',
  },
});

export default Header;
