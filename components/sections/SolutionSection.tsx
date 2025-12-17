'use client';

import { Container, Title, Text, Grid, ThemeIcon, Box, Paper, Stack, Group, Badge } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function SolutionSection() {
    return (
        <Box component="section" py={{ base: 80, md: 120 }}>
            <Container size="xl">
                <Grid gutter={60} align="center">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Text c="brand.5" fw={700} mb="sm" style={{ letterSpacing: 1 }}>END RESULT</Text>
                            <Title
                                order={2}
                                mb={40}
                                c="white"
                                style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}
                            >
                                대형 유통사를 설득할<br />
                                <span className="text-neon">강력한 증거 데이터</span>
                            </Title>

                            <Stack gap="xl">
                                <Group align="flex-start">
                                    <ThemeIcon variant="light" color="brand.5" radius="full" size="lg" mt={4} style={{ backgroundColor: 'rgba(255, 208, 40, 0.1)', color: '#ffd028' }}>
                                        <IconCheck size={18} />
                                    </ThemeIcon>
                                    <Box>
                                        <Text c="white" size="lg" fw={600}>TikTok Shop / Kickstarter 고객 반응 수집</Text>
                                        <Text c="dimmed">단순 조회수가 아닌 실제 참여와 구매 전환율을 측정합니다.</Text>
                                    </Box>
                                </Group>
                                <Group align="flex-start">
                                    <ThemeIcon variant="light" color="brand.5" radius="full" size="lg" mt={4} style={{ backgroundColor: 'rgba(255, 208, 40, 0.1)', color: '#ffd028' }}>
                                        <IconCheck size={18} />
                                    </ThemeIcon>
                                    <Box>
                                        <Text c="white" size="lg" fw={600}>Amazon 초기 판매 데이터 확보</Text>
                                        <Text c="dimmed">리뷰, 반품률, 실매출 데이터를 확보해 시장성을 증명합니다.</Text>
                                    </Box>
                                </Group>
                                <Group align="flex-start">
                                    <ThemeIcon variant="light" color="brand.5" radius="full" size="lg" mt={4} style={{ backgroundColor: 'rgba(255, 208, 40, 0.1)', color: '#ffd028' }}>
                                        <IconCheck size={18} />
                                    </ThemeIcon>
                                    <Box>
                                        <Text c="white" size="lg" fw={600}>투자자 전용 리포트 제공</Text>
                                        <Text c="dimmed">숫자로 증명된 데이터 리포트로 설득력을 극대화합니다.</Text>
                                    </Box>
                                </Group>
                            </Stack>
                        </motion.div>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 6 }}>
                        {/* Wrapper for responsive height */}
                        <Box h={{ base: 400, md: 600 }} style={{ position: 'relative', width: '100%' }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    opacity: { duration: 0.8 },
                                    scale: { duration: 0.8 },
                                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                                }}
                                style={{ position: 'relative', height: '100%', width: '100%' }}
                            >
                                {/* Background Glow */}
                                <Box
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '80%', // Responsive width
                                        maxWidth: 300,
                                        height: '50%', // Responsive height
                                        maxHeight: 300,
                                        background: 'rgba(255, 208, 40, 0.1)',
                                        filter: 'blur(50px)',
                                        borderRadius: '50%',
                                        zIndex: 0
                                    }}
                                />

                                {/* Blended Image Container with Double Masking */}
                                <Box
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        zIndex: 1,
                                        // Vertical Fade: Increased fade area (25% top/bottom)
                                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)'
                                    }}
                                >
                                    <Box
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            // Horizontal Fade
                                            maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'
                                        }}
                                    >
                                        <Image
                                            src="/images/mobile-gift-concept.jpg"
                                            alt="TikTok Viral Product"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </Box>
                                </Box>

                                {/* Glassmorphism Overlay */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '10%', // relative positioning
                                        right: '5%',   // relative positioning
                                        zIndex: 2,
                                        width: 200,
                                        padding: '16px',
                                        background: 'rgba(20, 20, 20, 0.8)',
                                        backdropFilter: 'blur(12px)',
                                        borderRadius: 20,
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 4
                                    }}
                                >
                                    <Text c="dimmed" size="xs" fw={700} tt="uppercase" style={{ letterSpacing: 1 }}>Conversion</Text>
                                    <Group justify="space-between" align="flex-end">
                                        <Text c="white" size="xl" fw={700} style={{ lineHeight: 1 }}>9.8%</Text>
                                        <Badge color="green" variant="light" size="sm" radius="md">▲ 3.2%</Badge>
                                    </Group>
                                </motion.div>
                            </motion.div>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}
