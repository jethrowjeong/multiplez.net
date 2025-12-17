'use client';

import { Container, Title, Text, Grid, Card, ThemeIcon, Box, Badge } from '@mantine/core';
import { IconBuildingSkyscraper, IconUsersGroup, IconHeartHandshake, IconChecks, IconVideo } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function WhyMultiplezSection() {
    return (
        <Box component="section" id="why-us" py={{ base: 80, md: 120 }}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb={30}
                    c="white"
                    style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}
                >
                    Why <span style={{ color: '#ffd028' }}>Multiplez?</span>
                </Title>

                <Box mb={80} ta="center">
                    <Text size="xl" fw={700} c="white" mb={10}>
                        단순 입점 대행이 아닙니다. &apos;매출&apos;을 만드는 &apos;운영&apos; 파트너입니다.
                    </Text>
                    <Text size="lg" c="dimmed">
                        Multiplez는 &apos;예쁜 상세페이지&apos;를 넘어 물류 최적화와 계정 성장 및 방어에 집중합니다.
                    </Text>
                </Box>

                <Grid gutter="md">
                    {/* Item 1: Large Box - 3 Years Experience */}
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ height: '100%' }}
                        >
                            <Card
                                p={{ base: 'lg', md: 'xl' }}
                                radius="lg"
                                className="glass-card glass-card-hover"
                                style={{
                                    height: '100%',
                                    minHeight: 300,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    overflow: 'hidden', // Ensure image stays inside
                                    position: 'relative'
                                }}
                            >
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                                    <Image
                                        src="/images/trade-experience-bg.png"
                                        alt="Trade Experience"
                                        fill
                                        style={{ objectFit: 'cover', opacity: 0.6 }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
                                </div>

                                <Box style={{ position: 'relative', zIndex: 1 }}>
                                    <Badge color="brand.5" size="lg" mb="md" c="black">SINCE 2021</Badge>
                                    <Title order={3} c="white" mb="sm">3년 실전 무역 경험</Title>
                                    <Text c="white" style={{ opacity: 0.9 }}>이론이 아닌 3년간의 실전 무역 경험으로<br />당신의 시행착오를 제로로 만듭니다.</Text>
                                </Box>
                                <ThemeIcon size={120} style={{ position: 'absolute', top: 20, right: 20, opacity: 0.1, color: '#ffd028', zIndex: 1 }}>
                                    <IconBuildingSkyscraper size={80} />
                                </ThemeIcon>
                            </Card>
                        </motion.div>
                    </Grid.Col>

                    {/* Item 2: Tall Box - Partners */}
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            style={{ height: '100%' }}
                        >
                            <Card
                                p={{ base: 'lg', md: 'xl' }}
                                radius="lg"
                                className="glass-card glass-card-hover"
                                style={{
                                    height: '100%',
                                    minHeight: 300,
                                    backgroundColor: '#ffd028',
                                    color: 'black'
                                }}
                            >
                                <ThemeIcon size="xl" radius="full" color="black" variant="light" mb="xl" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
                                    <IconUsersGroup size={24} color="black" />
                                </ThemeIcon>
                                <Title order={3} mb="sm" style={{ color: 'black' }}>Expert Team</Title>
                                <Text size="sm" fw={500} style={{ color: 'rgba(0,0,0,0.7)' }}>
                                    단순 대행이 아닙니다.<br />
                                    각 분야 TOP급 전문가들이<br />
                                    하나의 팀으로 움직입니다.
                                </Text>
                            </Card>
                        </motion.div>
                    </Grid.Col>

                    {/* Item 3: Medium Box - Share Profit */}
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{ height: '100%' }}
                        >
                            <Card p={{ base: 'lg', md: 'xl' }} radius="lg" className="glass-card glass-card-hover" style={{ height: '100%' }}>
                                <IconHeartHandshake size={48} color="#ffd028" style={{ marginBottom: 20 }} />
                                <Title order={4} c="white" mb="xs">VC와 동반 투자</Title>
                                <Text size="sm" c="dimmed">우리가 먼저 뛰어들고<br />검증된 팀만 VC와 연결합니다.</Text>
                            </Card>
                        </motion.div>
                    </Grid.Col>

                    {/* Item 4: Medium Box - Selection */}
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            style={{ height: '100%' }}
                        >
                            <Card p={{ base: 'lg', md: 'xl' }} radius="lg" className="glass-card glass-card-hover" style={{ height: '100%' }}>
                                <IconChecks size={48} color="#ffffff" style={{ marginBottom: 20 }} />
                                <Title order={4} c="white" mb="xs">엄격한 셀렉션</Title>
                                <Text size="sm" c="dimmed">아무 팀이나 받지 않습니다.<br />함께 크면 확실히 크게 큽니다.</Text>
                            </Card>
                        </motion.div>
                    </Grid.Col>

                    {/* Item 5: Medium Box - Webinar */}
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            style={{ height: '100%' }}
                        >
                            <Card
                                p={{ base: 'lg', md: 'xl' }} radius="lg" className="glass-card glass-card-hover" style={{ height: '100%' }}>
                                <IconVideo size={48} color="#ffd028" style={{ marginBottom: 20 }} />
                                <Title order={4} c="white" mb="xs">무료 전략 세션</Title>
                                <Text size="sm" c="dimmed">확신이 없다면<br />먼저 함께 플랜부터 짜봅시다.</Text>
                            </Card>
                        </motion.div>
                    </Grid.Col>
                </Grid >
            </Container >
        </Box >
    );
}
