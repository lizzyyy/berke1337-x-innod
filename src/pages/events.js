import * as React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer/index"
import SignUp from "../components/signup"
import * as eventsStyles from "./events.module.css"
import FullCalendar from '@fullcalendar/react'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid'
import styled from "@emotion/styled";

const CalendarStyle = styled.div`
    .fc .fc-daygrid-event {
        color: white;
    }
    .fc table {
        border-collapse: unset;
        
    }
    .fc .fc-daygrid-day {
        background: black;
    }
    .fc .fc-daygrid-event .fc-event-title {
        color: #23c4eb;
        font-weight: 400;
    }
`

const Events = () => {
    return (
        <body>
            <div className={eventsStyles.background}>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className={ eventsStyles.container}>
                        <div className={ eventsStyles.textContainer}>
                            <h1 className={ eventsStyles.title }>
                                Upcoming Events
                            </h1>
                            <div className={ eventsStyles.text }>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* To get Key and ID: https://fullcalendar.io/docs/google-calendar */}
                    <section className={eventsStyles.fullcalendar} id="calendar">
                        <CalendarStyle>
                            <FullCalendar
                                plugins={[ dayGridPlugin, googleCalendarPlugin ]}
                                initialView="dayGridMonth"
                                headerToolbar={{
                                    left: 'prev,next today',
                                    center: 'title',
                                    right: 'dayGridMonth,listYear'
                                }}
                                googleCalendarApiKey={'AIzaSyBQ1Wi1PIi4zdSmR8GI-2speJT98fRgicM'}
                                eventSources={[{
                                    googleCalendarId: '2d64fed102a3ab4347aa248fc8304f4500bde83ee0099fb60d64b8da6283a8db@group.calendar.google.com'
                                }]}
                            />
                        </CalendarStyle>
                    </section>
                    <div className={eventsStyles.signup} id="signup">
                        <SignUp />
                    </div>
                </main>
                <Footer />
            </div>
        </body>
    )
}

export default Events