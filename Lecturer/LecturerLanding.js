function LecturerLanding(props) {
  return (

    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 26, color: 'black', margin: 12 }}>Options for Lecturers</Text>
      <TouchableOpacity
       onPress={() => navigation.navigate('BrowseLecturer')}
       style={{ backgroundColor: '#be1428', marginBottom: 8,}}>
       <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center'}}>Browse Student Enrolment Summary</Text>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={() => navigation.navigate('BrowseMySubjects')}
        style={{ backgroundColor: '#be1428', marginBottom: 8, }}>
        <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center' }}>Browse Enrolment Summary For My Subjects</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('BrowseAllSubjects')}
         style={{ backgroundColor: '#be1428', marginBottom: 8, }}>
         <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center' }}>Browse Enrolment Summary For Particular Subjects</Text>
         </TouchableOpacity>
      </View>

  );
}
