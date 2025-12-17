'use client';

import { Container, Title, Text, Grid, Card, ThemeIcon, Box } from '@mantine/core';
import { IconHelp, IconBolt, IconAlertCircle } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function ProblemSection() {
    const problems = [
        {
            icon: IconHelp,
            iconColor: '#ffd028', // Brand Gold
            title: '불명확한 접근',
            desc: '무엇이 최선인지 알 수 없는 막막함',
        },
        {
            icon: IconBolt,
            iconColor: '#ffd028',
            title: '리소스 부족',
            desc: '마케팅, 법률, 언어... 전담 인력 부재',
        },
        {
            icon: IconAlertCircle,
            iconColor: '#ffd028',
            title: '확신 부재',
            desc: '외주사가 우리 제품을 이해할 수 있을까?',
        },
    ];

    return (
        <Box component="section" py={{ base: 80, md: 120 }} style={{ position: 'relative' }}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb={60}
                    c="white"
                    style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    }}
                >
                    <span className="text-neon">왜</span> 해외 진출이 어려울까요?
                </Title>

                <Grid gutter={30}>
                    {problems.map((item, index) => (
                        <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    padding={40}
                                    radius="lg"
                                    className="glass-card glass-card-hover"
                                    style={{
                                        minHeight: 250,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }}
                                >
                                    <ThemeIcon
                                        size={60}
                                        radius="full"
                                        variant="outline"
                                        mb="lg"
                                        style={{
                                            borderColor: item.iconColor,
                                            color: item.iconColor,
                                            boxShadow: `0 0 15px ${item.iconColor}40`
                                        }}
                                    >
                                        <item.icon size={32} stroke={1.5} />
                                    </ThemeIcon>

                                    <Text size="xl" fw={700} c="white" mb="sm" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                                        {item.title}
                                    </Text>

                                    <Text size="md" c="dimmed" style={{ lineHeight: 1.4 }}>
                                        {item.desc}
                                    </Text>
                                </Card>
                            </motion.div>
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
