function StudentLanding(props) {
  return (

    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 22, color: 'black', margin: 5, backgroundColor: '#efefef', padding: 8, width: 305, }}>Enrolment Buddy</Text>

      <Text style={{ fontSize: 26, color: 'black', margin: 15 }}>Options for Students</Text>

      <TouchableOpacity
       onPress={() => navigation.navigate('EnrolInSubjects')}
       style={{ backgroundColor: 'black', marginBottom: 8,}}>
       <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center'}}>Enrol In Subjects</Text>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={() => navigation.navigate('BrowseTrainingPlan')}
        style={{ backgroundColor: 'black', marginBottom: 8, }}>
        <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center' }}>Browse Training Plan</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => navigation.navigate('ViewSchedule')}
         style={{ backgroundColor: 'black', marginBottom: 8, }}>
         <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center' }}>View Schedule</Text>
         </TouchableOpacity>
      </View>

  );
}
