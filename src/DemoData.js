const DemoData = {
    resources: [
        {
            id: 'r0',
            name: 'Flight Lane 1',
            author: "Team 1",
            bgColor: '#17C8E7',
            issue: '#1'
        },
        {
            id: 'r1',
            name: 'Flight Lane 2',
            author: "Team 2",
            bgColor: '#17E7E1',
            issue: '#2'
        },
        {
            id: 'r2',
            name: 'Flight Lane 3',
            author: "Team 3",
            bgColor: '#17E7AB',
            issue: '#3'
        },
        {
            id: 'r3',
            name: 'Flight Lane 4',
            author: "Team 4",
            bgColor: '#17E772',
            issue: '#4'
        },
        {
            id: 'r4',
            name: 'Flight Lane 5',
            author: "Team 5",
            bgColor: '#33E717',
            issue: '#5'
        },
        {
            id: 'r5',
            name: 'Flight Lane 6',
            author: "Team 6",
            bgColor: '#6CE717',
            issue: '#6'
        },
        {
            id: 'r6',
            name: 'Flight Lane 7',
            author: "Team 7",
            bgColor: '#F9F912',
            issue: '#7'
        },
        {
            id: 'r7',
            name: 'Flight Lane 8',
            author: "Team 8",
            bgColor: '#F3A928',
            issue: '#8'
        }
    ],
    events: [
        {
            id: 0,
            start: '2022-10-20 15:50:00',
            end: '2022-12-19 23:30:00',
            label: 'PMI1',
            resourceId: 'r0',
            title: 'I am locked',
            movable: true,
            resizable: true,
            startResizable: false,
            bgColor: '#17C8E7'
        },
        {
            id: 1,
            start: '2022-10-20 15:50:00',
            end: '2022-12-19 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            label: 'QA Failed',
            // img: 'https://miro.medium.com/fit/c/28/28/1*UJzclN5h-DYWjRyVqXThUw.png',
            bgColor: '#17E7E1',
        },
        {
            id: 2,
            start: '2022-10-20 15:50:00',
            end: '2022-12-19 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            label: 'Development',
        },
        {
            id: 3,
            start: '2022-10-20 15:50:00',
            end: '2022-12-19 23:30:00',
            resourceId: 'r3',
            title: 'I am not movable',
            label: 'Development',
            movable: false
        },
        {
            id: 4,
            start: '2022-10-20 15:50:00',
            end: '2022-12-19 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            label: 'QA Complete',
            startResizable: false,
        },
        {
            id: 5,
            start: '2022-10-20 15:50:00',
            end: '2022-12-15 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            label: 'QA',
            endResizable: false
        },
        {
            id: 6,
            start: '2022-10-20 15:50:00',
            end: '2022-12-19 23:30:00',
            resourceId: 'r6',
            title: 'I am normal',
            label: 'To Do',
        },
        {
            id: 7,
            start: '2022-10-20 15:50:00',
            end: '2022-12-19 23:30:00',
            resourceId: 'r7',
            label: 'Development',
            title: 'I am exceptional',
            bgColor: '#FA9E95'
        },
    ],
    eventsForTaskView: [
        {
            id: 1,
            start: '2017-12-18 09:30:00',
            end: '2017-12-18 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            bgColor: '#D9D9D9',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 2,
            start: '2017-12-18 12:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            resizable: false,
            groupId: 2,
            groupName: 'Task2'
        },
        {
            id: 3,
            start: '2017-12-19 12:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r3',
            title: 'I am not movable',
            movable: false,
            groupId: 3,
            groupName: 'Task3'
        },
        {
            id: 7,
            start: '2017-12-19 15:40:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r7',
            title: 'I am exceptional',
            bgColor: '#FA9E95',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 4,
            start: '2017-12-20 14:30:00',
            end: '2017-12-21 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            startResizable: false,
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 5,
            start: '2017-12-21 15:30:00',
            end: '2017-12-22 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            endResizable: false,
            groupId: 3,
            groupName: 'Task3'
        },
        {
            id: 9,
            start: '2017-12-21 16:30:00',
            end: '2017-12-21 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 6,
            start: '2017-12-22 15:35:00',
            end: '2017-12-23 23:30:00',
            resourceId: 'r6',
            title: 'I am normal',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 8,
            start: '2017-12-25 15:50:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r1',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 10,
            start: '2017-12-26 18:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'R2 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 11,
            start: '2017-12-27 18:30:00',
            end: '2017-12-27 23:30:00',
            resourceId: 'r14',
            title: 'R4 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 12,
            start: '2017-12-28 18:30:00',
            end: '2017-12-28 23:30:00',
            resourceId: 'r6',
            title: 'R6 has many tasks',
            groupId: 3,
            groupName: 'Task3'
        },
    ],
    eventsForCustomEventStyle: [
        {
            id: 1,
            start: '2017-12-18 09:30:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            bgColor: '#D9D9D9',
            type: 1
        },
        {
            id: 2,
            start: '2017-12-18 12:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            resizable: false,
            type: 2
        },
        {
            id: 3,
            start: '2017-12-19 12:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r3',
            title: 'I am not movable',
            movable: false,
            type: 3
        },
        {
            id: 4,
            start: '2017-12-19 14:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            startResizable: false,
            type: 1
        },
        {
            id: 5,
            start: '2017-12-19 15:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            endResizable: false,
            type: 2
        },
        {
            id: 6,
            start: '2017-12-19 15:35:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r6',
            title: 'I am normal',
            type: 3
        },
        {
            id: 7,
            start: '2017-12-19 15:40:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r7',
            title: 'I am exceptional',
            bgColor: '#FA9E95',
            type: 1
        },
        {
            id: 8,
            start: '2017-12-19 15:50:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r1',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red',
            type: 2
        },
        {
            id: 9,
            start: '2017-12-19 16:30:00',
            end: '2017-12-27 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 1',
            type: 3
        },
        {
            id: 10,
            start: '2017-12-20 18:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 2',
            type: 1
        },
        {
            id: 11,
            start: '2017-12-21 18:30:00',
            end: '2017-12-22 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 3',
            type: 2
        },
        {
            id: 12,
            start: '2017-12-23 18:30:00',
            end: '2017-12-27 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 4',
            type: 3
        },
    ],
}

export default DemoData
