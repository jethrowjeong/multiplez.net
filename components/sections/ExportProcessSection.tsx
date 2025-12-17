'use client';

import { Container, Title, Text, SimpleGrid, Card, ThemeIcon, Box, Stack, Group, Badge, Center } from '@mantine/core';
import { IconClipboardCheck, IconUserPlus, IconTruckDelivery, IconHeadset, IconChecks, IconArrowRight, IconChevronDown } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function ExportProcessSection() {
    const steps = [
        {
            step: 'Step 1',
            title: '준비 (Prep)',
            items: ['제품 인증 확인', '가상계좌 개설', '서류 준비'],
            icon: IconClipboardCheck
        },
        {
            step: 'Step 2',
            title: '입점 (Setup)',
            items: ['셀러 계정 생성', '계정 정지 방지', '카테고리 승인'],
            icon: IconUserPlus
        },
        {
            step: 'Step 3',
            title: '물류 (Logistics)',
            items: ['FOB/ExWorks 설정', '수출 통관 처리', '해외 배송'],
            icon: IconTruckDelivery
        },
        {
            step: 'Step 4',
            title: '운영 (Operation)',
            items: ['아마존 광고(PPC)', 'CS 대응/환불', '정산 관리'],
            icon: IconHeadset
        }
    ];

    return (
        <Box component="section" id="solution" py={{ base: 80, md: 120 }} style={{ position: 'relative', overflow: 'hidden' }}>
            <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
                <Stack align="center" mb={60}>
                    <Badge
                        variant="outline"
                        color="gray"
                        size="lg"
                        radius="md"
                        mb="sm"
                        style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                    >
                        SOLUTION
                    </Badge>
                    <Title
                        order={2}
                        ta="center"
                        c="white"
                        style={{
                            fontFamily: 'Pretendard, sans-serif',
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                            lineHeight: 1.2
                        }}
                    >
                        복잡한 해외 수출<br />
                        준비, 입점, 물류, & 운영,<br />
                        <span style={{ color: '#ffd028' }}>혼자 감당하시겠습니까?</span>
                    </Title>
                </Stack>

                <Box style={{ position: 'relative' }}>
                    {/* The "Multiplez Cover" Effect Container - Gold Theme */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{
                            position: 'absolute',
                            inset: -20,
                            borderRadius: 32,
                            // Background: Very subtle gold tint
                            background: 'rgba(255, 215, 0, 0.01)',
                            // Inner Glow: Golden inner shadow
                            boxShadow: 'inset 0 0 50px rgba(255, 215, 0, 0.15)',
                            border: '1px solid rgba(255, 215, 0, 0.1)', // Very subtle outer definition
                            zIndex: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            pointerEvents: 'none'
                        }}
                    >
                        {/* Corner accents for premium feel */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: 32, height: 32, borderTop: '2px solid rgba(255,215,0,0.5)', borderLeft: '2px solid rgba(255,215,0,0.5)', borderRadius: '32px 0 0 0' }} />
                        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 32, height: 32, borderBottom: '2px solid rgba(255,215,0,0.5)', borderRight: '2px solid rgba(255,215,0,0.5)', borderRadius: '0 0 32px 0' }} />
                    </motion.div>

                    {/* Steps Grid */}
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" style={{ position: 'relative', zIndex: 1 }}>
                        {steps.map((item, index) => (
                            <Box key={index} style={{ position: 'relative' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{ height: '100%' }}
                                >
                                    {/* Card Container with Gradient Border Effect */}
                                    <Box
                                        style={{
                                            height: '100%',
                                            position: 'relative',
                                            padding: '1px', // Space for the border
                                            borderRadius: 'var(--mantine-radius-lg)',
                                            background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)', // Calculated gradient border
                                        }}
                                    >
                                        <Card
                                            padding="xl"
                                            radius="lg"
                                            style={{
                                                height: '100%',
                                                // Glassmorphism: pure black with opacity + blur
                                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)',
                                                border: 'none', // Border is handled by parent
                                            }}
                                        >
                                            <ThemeIcon
                                                size={50}
                                                radius="md"
                                                variant="light"
                                                color="gray"
                                                mb="lg"
                                                style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#FFD700' }}
                                            >
                                                <item.icon size={28} stroke={1.5} color="currentColor" />
                                            </ThemeIcon>

                                            <Text size="xs" c="dimmed" fw={700} tt="uppercase" mb={4} style={{ letterSpacing: 1, color: '#FFD700' }}>
                                                {item.step}
                                            </Text>
                                            <Text size="lg" c="white" fw={700} mb="md">
                                                {item.title}
                                            </Text>

                                            <Stack gap="xs">
                                                {item.items.map((subItem, i) => (
                                                    <Group key={i} gap="xs" align="flex-start" wrap="nowrap">
                                                        <Box style={{ marginTop: 8, width: 6, height: 6, borderRadius: '50%', backgroundColor: '#FFD700', boxShadow: '0 0 5px #FFD700' }} />
                                                        <Text size="sm" c="gray.4" style={{ lineHeight: 1.4 }}>{subItem}</Text>
                                                    </Group>
                                                ))}
                                            </Stack>
                                        </Card>
                                    </Box>
                                </motion.div>

                                {/* Flow Indicator (Arrow) - Golden Glowing Arrow */}
                                {index < steps.length - 1 && (
                                    <>
                                        {/* Desktop Arrow (Right) */}
                                        <Box
                                            visibleFrom="md"
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                right: -24,
                                                transform: 'translateY(-50%)',
                                                zIndex: 10,
                                                color: '#FFD700',
                                                filter: 'drop-shadow(0 0 8px rgba(255,215,0,0.8))' // Intense gold glow
                                            }}
                                        >
                                            <IconArrowRight size={32} stroke={1.5} />
                                        </Box>

                                        {/* Mobile Arrow (Down) */}
                                        <Box
                                            hiddenFrom="md"
                                            style={{
                                                position: 'absolute',
                                                bottom: -24,
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                zIndex: 10,
                                                color: '#FFD700',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                width: '100%',
                                                filter: 'drop-shadow(0 0 8px rgba(255,215,0,0.8))'
                                            }}
                                        >
                                            <IconChevronDown size={32} stroke={1.5} />
                                        </Box>
                                    </>
                                )}
                            </Box>
                        ))}
                    </SimpleGrid>

                    {/* The "Covering" Label Area at the bottom */}
                    <Box mt={40} ta="center" style={{ position: 'relative', zIndex: 2 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Badge
                                size="xl"
                                variant="gradient"
                                gradient={{ from: '#FFD700', to: '#FFB300', deg: 145 }} // Gold gradient
                                c="black"
                                style={{
                                    padding: '16px 40px',
                                    height: 'auto',
                                    textTransform: 'none',
                                    fontSize: '1.2rem',
                                    fontWeight: 700,
                                    // 3D Floating Effect with Gold Shadow
                                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 4px 10px rgba(255, 215, 0, 0.3), inset 0 1px 1px rgba(255,255,255,0.4)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    transform: 'translateY(-4px)',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.1 }}>
                                    <span style={{ fontSize: '0.75em', fontWeight: 600, letterSpacing: '0.5px', marginBottom: 2 }}>Multiplez</span>
                                    <span style={{ fontSize: '1.1em', fontWeight: 800 }}>전 과정 시장 진출 셋업 시스템</span>
                                </div>
                            </Badge>

                            <Text
                                mt="xl"
                                size="xl"
                                fw={700}
                                style={{
                                    color: 'white',
                                    textShadow: '0 0 20px rgba(0,0,0,0.5)'
                                }}
                            >
                                복잡한 절차는 <span style={{ color: '#FFD700', textShadow: '0 0 20px rgba(255,215,0,0.5)' }}>저희가</span>, 대표님은 <span style={{ color: '#FFD700', textShadow: '0 0 20px rgba(255,215,0,0.5)' }}>제품 생산만</span>
                            </Text>
                            <Text c="dimmed" mt="sm">
                                해외 시장 진출에 필요한 모든 과정을 하나의 팀처럼 움직여 해결해 드립니다.
                            </Text>
                        </motion.div>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
