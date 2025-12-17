'use client';

import { useState } from 'react';
import { Container, Title, Text, Box, Tabs, Paper, List, Group, Badge, ThemeIcon, Stack } from '@mantine/core';
import { IconCheck, IconRocket, IconChartBar } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function RoadmapSection() {
    const [activeTab, setActiveTab] = useState<string | null>('phase1');

    return (
        <Box component="section" py={{ base: 80, md: 120 }}>
            <Container size="md">
                <Title order={2} c="white" ta="center" mb="xl">
                    {activeTab === 'phase1' ? (
                        <>
                            <span style={{ color: '#FFD028' }}>증거 확보</span> 진행 프로세스
                        </>
                    ) : (
                        <>
                            <span style={{ color: '#FFD028' }}>성장 자동화</span> 진행 프로세스
                        </>
                    )}
                </Title>

                <Tabs variant="pills" radius="xl" value={activeTab} onChange={setActiveTab} keepMounted={false}>
                    <Tabs.List justify="center" mb={40}>
                        <Tabs.Tab
                            value="phase1"
                            style={{
                                fontSize: '1.1rem',
                                padding: '12px 24px',
                                '--tabs-radius': '10px',
                                fontWeight: 700,
                                color: activeTab === 'phase1' ? 'black' : undefined
                            }}
                            color="brand.5" // Yellow active state
                        >
                            PHASE 1: 증거 확보
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="phase2"
                            style={{
                                fontSize: '1.1rem',
                                padding: '12px 24px',
                                fontWeight: 700
                            }}
                            color="gray"
                        >
                            PHASE 2: 성장 자동화
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="phase1">
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <Paper
                                className="glass-card"
                                p={{ base: 30, md: 50 }}
                                radius="lg"
                                style={{ borderTop: '4px solid #ffd028' }}
                            >
                                <Group mb="xl" justify="space-between">
                                    <Box>
                                        <Title order={3} c="white" mb={4}>"<span style={{ color: '#FFD028' }}>3개월</span> 안에 시장성을 숫자로 보여드립니다"</Title>
                                        <Text c="dimmed">킥스타터, 틱톡 바이럴과 아마존 초반 매출로, 시장 가능성을 데이터로 확인합니다.</Text>
                                    </Box>
                                    <ThemeIcon size={60} radius="full" color="brand.5" variant="light" style={{ backgroundColor: 'rgba(255, 208, 40, 0.1)', color: '#ffd028' }}>
                                        <IconChartBar size={30} />
                                    </ThemeIcon>
                                </Group>

                                <Stack gap="md" mb="xl">
                                    <List
                                        spacing="lg"
                                        size="lg"
                                    >
                                        <List.Item icon={<ThemeIcon color="brand.5" size={24} radius="xl" variant="filled" style={{ color: 'black', marginTop: 4 }}><IconCheck size={14} /></ThemeIcon>}>
                                            <Box>
                                                <Text c="white" fw={700} mb={4}>Month 1 · 미국 시장 진출 전략 설계</Text>
                                                <Text c="dimmed" size="sm" style={{ lineHeight: 1.4 }}>브랜드·상품에 맞는 미국 진출 가설과 채널 전략을 세웁니다.</Text>
                                            </Box>
                                        </List.Item>
                                        <List.Item icon={<ThemeIcon color="brand.5" size={24} radius="xl" variant="filled" style={{ color: 'black', marginTop: 4 }}><IconCheck size={14} /></ThemeIcon>}>
                                            <Box>
                                                <Text c="white" fw={700} mb={4}>Month 2 · GTM 실행 & 런칭</Text>
                                                <Text c="dimmed" size="sm" style={{ lineHeight: 1.4 }}>선정한 채널(킥스타터, 틱톡, 아마존 등)에서 실제 캠페인과 런칭을 진행합니다.</Text>
                                            </Box>
                                        </List.Item>
                                        <List.Item icon={<ThemeIcon color="brand.5" size={24} radius="xl" variant="filled" style={{ color: 'black', marginTop: 4 }}><IconCheck size={14} /></ThemeIcon>}>
                                            <Box>
                                                <Text c="white" fw={700} mb={4}>Month 3 · 판매 데이터 리포트 & 인사이트</Text>
                                                <Text c="dimmed" size="sm" style={{ lineHeight: 1.4 }}>3개월간의 판매·마케팅 데이터를 정리해, 계속 갈지/접을지 판단할 수 있는 리포트를 드립니다.</Text>
                                            </Box>
                                        </List.Item>
                                    </List>
                                </Stack>
                            </Paper>
                        </motion.div>
                    </Tabs.Panel>

                    <Tabs.Panel value="phase2">
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <Paper
                                className="glass-card"
                                p={{ base: 30, md: 50 }}
                                radius="lg"
                                style={{ borderTop: '4px solid #ffffff' }}
                            >
                                <Group mb="xl" justify="space-between">
                                    <Box>
                                        <Title order={3} c="white" mb={4}>"이제, <span style={{ color: '#FFD028' }}>시스템</span>으로 키웁니다"</Title>
                                        <Text c="dimmed">내부 시스템 구축과 추가 판로 확장으로, 사람 손이 덜 가도 성장하는 구조를 만듭니다.</Text>
                                    </Box>
                                    <ThemeIcon size={60} radius="full" color="gray" variant="light">
                                        <IconRocket size={30} />
                                    </ThemeIcon>
                                </Group>

                                <Stack gap="md" mb="xl">
                                    <List
                                        spacing="lg"
                                        size="lg"
                                    >
                                        <List.Item icon={<ThemeIcon color="gray" size={24} radius="xl" variant="filled" style={{ color: 'white', marginTop: 4 }}><IconCheck size={14} /></ThemeIcon>}>
                                            <Box>
                                                <Text c="white" fw={700} mb={4}>Month 4 · 대형 유통 채널 확장</Text>
                                                <Text c="dimmed" size="sm" style={{ lineHeight: 1.4 }}>검증된 상품을 기반으로, 대형 유통사·파트너 채널 입점을 추진합니다.</Text>
                                            </Box>
                                        </List.Item>
                                        <List.Item icon={<ThemeIcon color="gray" size={24} radius="xl" variant="filled" style={{ color: 'white', marginTop: 4 }}><IconCheck size={14} /></ThemeIcon>}>
                                            <Box>
                                                <Text c="white" fw={700} mb={4}>Month 5 · 투자자 미팅 & 자금 유치</Text>
                                                <Text c="dimmed" size="sm" style={{ lineHeight: 1.4 }}>파일럿 성과 데이터를 바탕으로, 투자자 피칭과 자금 유치를 돕습니다.</Text>
                                            </Box>
                                        </List.Item>
                                        <List.Item icon={<ThemeIcon color="gray" size={24} radius="xl" variant="filled" style={{ color: 'white', marginTop: 4 }}><IconCheck size={14} /></ThemeIcon>}>
                                            <Box>
                                                <Text c="white" fw={700} mb={4}>Month 6 · 풀필먼트·운영 시스템 내재화</Text>
                                                <Text c="dimmed" size="sm" style={{ lineHeight: 1.4 }}>주문·재고·배송이 자동으로 돌아가도록, 풀필먼트와 운영 시스템을 정비합니다.</Text>
                                            </Box>
                                        </List.Item>
                                    </List>
                                </Stack>
                            </Paper>
                        </motion.div>
                    </Tabs.Panel>
                </Tabs>
            </Container>
        </Box>
    );
}
