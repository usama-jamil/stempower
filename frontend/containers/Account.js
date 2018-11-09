import React from 'react';
import axios from 'axios';

import OrganizationOverview from './../components/account/OrganizationOverview';
import OrganizationUpdates from './../components/account/OrganizationUpdates';
import OrganizationMeetingHistory from './../components/account/OrganizationMeetingHistory';
import OrganizationDocuments from './../components/account/OrganizationDocuments';
import OrganizationCalendar from './../components/account/OrganizationCalendar';

 class Account extends React.Component{

    constructor(props) {
      super(props);
      this.state = {mentors: []}
    }

    componentWillMount() {
        axios.get('/api/mentors/1234').then(({ data }) => {
          var mentors = [];
          for (var i = 0; i < data.length; i++) {
            var d = data[i];
            mentors.push(d.firstName + " " + d.lastName);
          }
          this.setState({mentors: mentors});
          console.log("State",this.state);
      })
    }

    render() {
        return (
          <div className="container">
            <OrganizationOverview
              mentors={this.state.mentors}
              organizationName={"Troop 1234"}
              />
              <div style={{display: "flex", flexDirection: "row"}}>
              <div style={{flex: 1}}>
                  <OrganizationUpdates
                    waiversNeeded={42}
                    />
                  <OrganizationMeetingHistory
                    meetingHistory={["1/1/2016", "1/1/2017", "1/1/2018"]}
                    />
                  <OrganizationDocuments />
                </div>
                <div style={{flex: 5}}><OrganizationCalendar 
                  embedUrl={"https://calendar.google.com/calendar/embed?src=2vfvknte3efemq5dqsn43q7qik%40group.calendar.google.com&ctz=America%2FNew_York"}
                  width={600}
                  height={400}
                  align={"center"}
                  /></div>
              </div>
            </div>
        )
    }
};

export default Account;
