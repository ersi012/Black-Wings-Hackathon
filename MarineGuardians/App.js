import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Button, Alert } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.navbar}>
        <Text style={styles.text}>Marine Guardians</Text>
      </View>

      <ScrollView>
        <Image source={require('./assets/logo.jpg')} style={styles.img}></Image>
        <Text style={styles.introText}> Our Mission</Text>
        <Text style={styles.p}>Marine Guardian is dedicated to safeguarding marine life 
        and nurturing the health of our oceans. We empower individuals and communities 
        to take direct action in protecting marine ecosystems. Through fostering a global 
        network of volunteers and advocates, we strive to facilitate immediate and impactful 
        actions against marine pollution and to promote the conservation and rehabilitation 
        of marine wildlife. Join us today! </Text>

        <View style={{backgroundColor:'#3DA5C4', width: 120, height: 40, alignSelf: 'center', borderRadius: 20 }}> 
          <Button
                title="Explore"
                color= '#ffffff'
                onPress={() => Alert.alert('Explore volunteering and reporting events')}
              />
        </View>

        <View>
          <Text style={styles.nrmlTxt}>Volunteering</Text>
          <Image source={require('./assets/pic1.png')} style={styles.img}/>
          <Text style={styles.pBold}>Discover and join volunteer events related to protecting marine life!</Text>
          <Text style={styles.p}> Browse, create, and sign up for a wide range of volunteer events, such as beach clean-ups, 
          educational workshops, and wildlife rescue operations around their local communities.</Text>
        </View>

        <View style={{backgroundColor:'#3DA5C4', width: 150, height: 40, alignSelf: 'center', borderRadius: 20 }}> 
          <Button
                title="Volunteer"
                color= '#ffffff'
                onPress={() => Alert.alert('Volunteer!')}
              />
        </View>

        <View>
          <Text style={styles.nrmlTxt}>Reporting</Text>
          <Image source={require('./assets/pic2.png')} style={styles.img}/>
          <Text style={styles.pBold}>Report incidents of marine pollution and trapped wildlife!</Text>
          <Text style={styles.p}>Marine Guardian provides a swift and efficient channel for individuals to report instances of marine pollution and animals in distress. Simply take a picture and submit reports complete with location data, descriptions, and photographic evidence to help make the sea and shoreline a safer place for marine animals.</Text>
        </View>

        <View style={{backgroundColor:'#3DA5C4', width: 110, height: 40, alignSelf: 'center', borderRadius: 20 }}> 
          <Button
                title="Report"
                color= '#ffffff'
                onPress={() => Alert.alert('Report!')}
              />
        </View>

        <View>
          <Text style={styles.nrmlTxt}>Connecting</Text>
          <Image source={require('./assets/pic3.png')} style={styles.img}/>
          <Text style={styles.pBold}>Connect with others and build a community!</Text>
          <Text style={styles.p}>Marine Guardian fosters a vibrant community of individuals who share a passion for marine conservation. Engage, collaborate, and inspire one another to build meaningful connections and strive for a cleaner, safer ocean!</Text>
        </View>

        <View style={{backgroundColor:'#3DA5C4', width: 150, height: 40, alignSelf: 'center', borderRadius: 20 }}> 
          <Button
                title="Join today"
                color= '#ffffff'
                onPress={() => Alert.alert('Connect!')}
              />
        </View>

      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    width: 350,
    height: 60,
    backgroundColor: '#3DA5C4',
  },
  img:{
   width: 300,
   height: 300,
   alignSelf: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    justifyContent: 'center',
    paddingTop: 14,
    paddingLeft: 85,
  },
  introText: {
    color: '#3DA5C4',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  nrmlTxt: {
    color: '#3DA5C4',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 20
  },
  p:{
    textAlign: 'center',
    padding: 16
  },
  pBold:{
    fontWeight: 'bold',
    paddingTop: 12,
    textAlign: 'center',
  }
});
