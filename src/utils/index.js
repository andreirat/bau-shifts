const getAvailableEngineers = ( allEngineers, todayShift ) => {
  const newShiftYesterday = todayShift;
  
  let meetsCriteria;
  // if some engineers worked less than one shift, select from that pool
  if ( allEngineers.some( eng => eng.shifts_worked < 1 ) ) {
    meetsCriteria = ( engineer ) => {
      return newShiftYesterday !== null ? !newShiftYesterday.includes( engineer.name ) && engineer.shifts_worked < 1 : true;
    }
  }
  // all engineers reached the 2 shift limit, reset the shifts_worked count
  else if ( allEngineers.every( eng => eng.shifts_worked === 2 ) ) {
    return allEngineers.map( engineer => {
      engineer.shifts_worked = 0;
      return engineer;
    } );
  } else {
    meetsCriteria = ( engineer ) => {
      return newShiftYesterday !== null ? !newShiftYesterday.includes( engineer.name ) && engineer.shifts_worked < 2 : true;
    }
  }
  return allEngineers.filter( meetsCriteria );
};

const selectTodayEngineers = ( eligibleEngineersList, engineersState ) => {
  let engineers = eligibleEngineersList.map( engineer => {
    return engineer.name
  } );
  
  let engineersObj = {
    shiftYesterday: [],
    todayShift: [],
    engineers: []
  }
  
  let shifts = {
    morning: null,
    afternoon: null
  }
  
  shifts.morning = engineers[Math.floor( Math.random() * engineers.length )];
  
  if ( shifts.morning ) {
    const morningEng = engineers.indexOf( shifts.morning );
    if ( morningEng !== -1 ) {
      engineers.splice( morningEng, 1 )
    }
    shifts.afternoon = engineers[Math.floor( Math.random() * engineers.length )];
  }
  engineersObj.engineers = engineersState.slice( 0 );
  
  if ( shifts.morning !== "" && shifts.afternoon !== "" ) {
    Object.keys( engineersObj.engineers ).forEach( ( key ) => {
      if ( engineersObj.engineers[key].name === shifts.morning ) {
        engineersObj.engineers[key].shifts_worked += 1;
      }
      if ( engineersObj.engineers[key].name === shifts.afternoon ) {
        engineersObj.engineers[key].shifts_worked += 1;
      }
    } );
  }
  engineersObj.todayShift.push( shifts.morning );
  engineersObj.todayShift.push( shifts.afternoon );
  
  return engineersObj;
}

export { getAvailableEngineers, selectTodayEngineers };