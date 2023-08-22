import styles from './timeline.module.css'
import WorkIcon from './briefcase.svg'
import timelineElements from './timelineElements'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

function Timeline() {
    return (
        <div className={styles.timeline}>
            <VerticalTimeline lineColor='white' layout={'1-column-left'}>
                {
                    timelineElements.map((element) => {
                        return (
                            <VerticalTimelineElement
                                key={element.id}
                                date={element.date}                               
                                iconStyle={{background: 'pink'}}
                                icon={<WorkIcon />}
                                iconClassName={styles.icon}
                                contentStyle={{ boxShadow: "0 0.25em 0.5em 0 rgba(0,0,0, 0.2)", padding: "1.3em 3em", color: '#000' }}
                            >
                                <h3 className={styles.title}>{element.title}</h3>
                                <h4 className={styles.subtitle}>{element.company}</h4>
                                <h5 className={styles.paragraph}>{element.description}</h5>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default Timeline