'use client';

import { Container, Title, Text, SimpleGrid, Card, ThemeIcon, Box } from '@mantine/core';
import { IconClock, IconCoin, IconChartBar, IconMoodSmile } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function ResultsSection() {
    const results = [
        {
            icon: IconClock,
            number: '3 Months',
            subtitle: '첫 매출 발생',
            desc: '평균 9개월 → 3개월 단축'
        },
        {
            icon: IconCoin,
            number: '60%+',
            subtitle: '파트너 재계약률',
            desc: '단발성이 아닌 지속적 확장'
        },
        {
            icon: IconChartBar,
            number: '13',
            subtitle: '현재 운영 글로벌 채널',
            desc: '미국, 일본, 러시아 실전 경험'
        },
        {
            icon: IconMoodSmile,
            number: '100%',
            subtitle: '계정 이슈 해결률',
            desc: '정지 방어 및 즉각 복구'
        },
    ];

    return (
        <Box component="section" py={{ base: 80, md: 120 }}>
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb={60}
                    c="white"
                    style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                >
                    3개월 파일럿으로 가능성을 먼저 검증하세요.
                </Title>
                <SimpleGrid cols={{ base: 1, md: 4 }} spacing={30}>
                    {results.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                padding="xl"
                                radius="lg"
                                className="glass-card glass-card-hover"
                                style={{
                                    textAlign: 'center',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderTop: 'none'
                                }}
                            >
                                <Text fw={900} size="xl" mb="xs" style={{ fontSize: '2.5rem', fontFamily: 'Pretendard, sans-serif', color: '#ffd028', textShadow: '0 0 20px rgba(255, 208, 40, 0.3)' }}>
                                    {item.number}
                                </Text>

                                <Text fw={600} size="lg" mb="sm" c="white">
                                    {item.subtitle}
                                </Text>

                                <Text size="sm" c="dimmed">
                                    {item.desc}
                                </Text>
                            </Card>
                        </motion.div>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
